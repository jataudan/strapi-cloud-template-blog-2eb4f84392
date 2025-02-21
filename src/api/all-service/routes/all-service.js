'use strict';

/**
 * all-service router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::all-service.all-service');
