/**
 * This file is for any webpack build tasks that the Angular CLI doesn't support
 * it is run before the CLI build step, see webpack-pre-build script
 *
 * Custom steps
 *  - replace variables in index.html using HtmlWebpackPlugin which also conditionally includes CkEditor
 *
 */

import * as webpack from 'webpack';
import * as path from 'path';
import * as packageJson from '../../../package.json';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const i18nTranslations = require('./extract-i18n-translation');
const banner = packageJson.name + '-' + packageJson.version;
const environmentJson = './src/config/environment/environment.json';

const METADATA = {
    title: 'Unity',
    banner: banner,
};

const config: webpack.Configuration = {
    mode: 'none',
    entry: {
        'null': environmentJson
    },
    output: {
        path: path.resolve(__dirname, '../../temp')
    },
    plugins: [
        new i18nTranslations({
            features: Object.values({ formBuilder: 'form-builder',  formRenderer: 'form-renderer'})
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            metadata: METADATA,
            inject: false
        })
    ]
};
module.exports = config;
