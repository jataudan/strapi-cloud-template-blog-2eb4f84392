'use strict';

/**
 * keyword-research service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::keyword-research.keyword-research');
