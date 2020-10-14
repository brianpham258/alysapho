require('dotenv').config();
const webpack = require('webpack');
const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withLess = require('@zeit/next-less');
const path = require('path');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
    require.extensions['.less'] = file => {};
}

module.exports = withCSS(
    withLess(
        withSass({
            lessLoaderOptions: {
                javascriptEnabled: true
            },
            webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
                // eslint-disable-next-line no-param-reassign
                config.plugins = config.plugins || [];

                // read .env
                config.plugins.push(new webpack.EnvironmentPlugin(process.env));

                // Fixes npm packages that depend on `fs` module
                // eslint-disable-next-line no-param-reassign
                config.node = {
                    fs: 'empty'
                };

                config.module.rules.push({
                    test: /\.(png|woff|woff2|eot|ttf|svg|gif|jpg)$/,
                    use: [
                        {
                            loader: 'url-loader'
                        }
                    ]
                });

                return config;
            }
        })
    )
);
