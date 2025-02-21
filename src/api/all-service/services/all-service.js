'use strict';

/**
 * all-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::all-service.all-service');
