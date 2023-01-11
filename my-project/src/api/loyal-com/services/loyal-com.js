'use strict';

/**
 * loyal-com service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::loyal-com.loyal-com');
