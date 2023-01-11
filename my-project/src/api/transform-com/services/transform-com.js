'use strict';

/**
 * transform-com service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::transform-com.transform-com');
