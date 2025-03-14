"use strict";
const lifecycleHooks = require("./middlewares/lifecycle");

module.exports = {
  async register({ strapi }) {
    strapi.db.lifecycles.subscribe(lifecycleHooks);
  },
  async bootstrap() {
    // Any bootstrap logic if needed
  },
  async destroy() {
    // Cleanup tasks if needed
  },
};
