module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "~@/assets/scss/style.scss";`
            }
        }
    },
    chainWebpack: config => {
        config.performance
            .maxEntrypointSize(400000)
            .maxAssetSize(400000)
    },
    configureWebpack: {
        devtool: 'source-map',
        performance: { hints: false },
    },
};
