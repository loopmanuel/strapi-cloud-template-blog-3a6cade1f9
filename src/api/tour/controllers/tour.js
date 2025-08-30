'use strict';

/**
 * tour controller
 */

const {createCoreController} = require('@strapi/strapi').factories;

module.exports = createCoreController('api::tour.tour', ({strapi}) => ({
    async findOne(ctx) {
        const { slug } = ctx.params;
        const entity = await strapi.db.query('api::tour.tour').findOne({
            where: { slug }
        });

        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);
    }
}));
