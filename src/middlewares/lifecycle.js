// @ts-nocheck
const Jimp = require("jimp");
const { rules } = require("../../config/image-rules");
const { ValidationError } = require("@strapi/utils").errors;

module.exports = {
  async beforeCreate(event) {
    await validateImages(event);
  },
  async beforeUpdate(event) {
    await validateImages(event);
  },
};

async function validateImages(event) {
  const { model, params } = event;
  const contentType = model.uid;
  const contentRules = rules[contentType];

  if (!contentRules) return;

  const errors = [];

  for (const field in contentRules) {
    const fieldRules = contentRules[field];
    const fieldData = params.data[field];

    if (!fieldData) continue;

    if (Array.isArray(fieldData)) {
      for (const imgData of fieldData) {
        if (imgData.id) {
          await validateImage(imgData.id, field, fieldRules, errors);
        }
      }
    } else if (fieldData.id) {
      await validateImage(fieldData.id, field, fieldRules, errors);
    }
  }

  if (errors.length > 0) {
    throw new ValidationError(errors.join("\n"));
  }
}

async function validateImage(imageId, field, fieldRules, errors) {
  const image = await strapi.entityService.findOne(
    "plugin::upload.file",
    imageId,
    { fields: ["url"] }
  );

  if (!image || !image.url) return;

  const imageUrl = image.url.startsWith("http")
    ? image.url
    : `${strapi.config.get("server.url") || "http://localhost:1337"}${image.url}`;

  try {
    const img = await fetchImage(imageUrl);
    const { width, height } = fieldRules;

    if (img.bitmap.width !== width || img.bitmap.height !== height) {
      errors.push(
        `Invalid dimensions for "${field}". Required: ${width}x${height}, but got ${img.bitmap.width}x${img.bitmap.height}.`
      );
    }
  } catch (error) {
    errors.push(`Failed to process image for "${field}": ${error.message}`);
  }
}

async function fetchImage(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch image: ${response.status}`);
  }
  return await Jimp.read(await response.arrayBuffer());
}
