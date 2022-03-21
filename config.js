var dojoConfig = {
    async: true,
    // This code registers the correct location of the "demo"
    // package so we can load Dojo from the CDN whilst still
    // being able to load local modules
    packages: [
        {
            name: "app",
            location: location.pathname.replace(/\/[^/]*$/, '') + '/modules'
        },
        {
            name: "templates",
            location: location.pathname.replace(/\/[^/]*$/, '') + '/templates'
        },
        {
            name: "index",
            location: 'index',
        },

    ]
};