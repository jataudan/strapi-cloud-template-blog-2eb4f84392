'use strict';

/**
 * all-service controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::all-service.all-service');
