'use strict';

/**
 * catogery controller
 */
const stripe = require("stripe")(process.env.STRIPE_KEY);
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::catogery.catogery');
