module.exports = shipit => {
    // Load shipit-deploy tasks
    require('shipit-deploy')(shipit)

    shipit.initConfig({
        default: {
            deployTo: '/var/www/html',
            repositoryUrl: 'git@github.com:dsvjetl/portfolio.git',
        },
        staging: {
            servers: '142.93.197.87',
        },
    })
};