module.exports = () => ({
    slugify: {
        enabled: true,
        config: {
            contentTypes: {
                tour: {
                    field: 'slug',
                    references: 'title',
                },
                tour_category: {
                    field: 'slug',
                    references: 'title',
                },
            },
        },
    },
});
