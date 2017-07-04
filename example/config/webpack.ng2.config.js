const assign = require("object-assign");
const DefinePlugin = require("webpack/lib/DefinePlugin");
const ContextReplacementPlugin = require("webpack/lib/ContextReplacementPlugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const baseConfig = require("./webpack.base.config");
const polyfills = require("./ng2-deps/polyfills");
const vendor = require("./ng2-deps/vendor");

const plugins = [
    // Provides context to Angular"s use of System.import
    new ContextReplacementPlugin(
        // The (\\|\/) piece accounts for path separators in *nix and Windows
        /angular(\\|\/)core(\\|\/)@angular/, "./src"
    ),
    new HtmlWebpackPlugin({
        template: "./index.ejs",
        inject: "body",
        NG2: true
    }),
    new DefinePlugin({
        process: {
            env: { NG2: true }
        }
    })
];

module.exports = assign({}, baseConfig, {
    entry: {
        polyfills,
        vendor,
        bundle: "./main"
    },

    plugins
});
