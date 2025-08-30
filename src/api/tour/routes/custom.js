module.exports = {
    routes: [
        {
            method: "GET",
            path: "/tours/:slug",
            handler: 'tour.findOne',
            config: {
                auth: false,
            }
        }
    ]
}
