const path = require('path'),
			fs = require('fs'),
			HtmlWebpackPlugin = require('html-webpack-plugin'),
			MiniCssExtractPlugin = require("mini-css-extract-plugin"),
			CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin"),
			TerserWebpackPlugin = require("terser-webpack-plugin");
const { ids } = require('webpack');

/* <------ Настройка Оптимизации ------> */

const optimization = () => {
	const configObj = {
		splitChunks: {
			chunks: 'all',
		},
	};

	if (isProd) {
		configObj.minimizer = [
			new CssMinimizerWebpackPlugin(),
			new TerserWebpackPlugin(),
		];
	}

	return configObj;
};

/* <------ Настройка пути файлов ждя PUG ------> */

const PAGES_DIR = path.resolve(__dirname, `./src/pug/pages/`)
			PAGES = fs.readdirSync(PAGES_DIR).filter(filename => filename.endsWith('.pug'));

/* <------ Настройка режима разработки ------> */

const isDev  = process.env.NODE_ENV === `development`;
const isProd = !isDev;

const filename = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;



module.exports = {

	/* <------ Начало сборки в режиме ------> */

	module: isDev,

	/* <------ Точка входа ------> */

	entry: {
		main: path.resolve(__dirname, `./src/js/script.js`),
	},

	/* <------ Точка выхода ------> */

	output: {
		filename: `./js/${filename('js')}`,
		path: path.resolve(__dirname, `./app`),
		clean: true,
	},

	/* <------ DevServer ------> */

	devServer: {
		historyApiFallback: true,
		static: {
      directory: path.join(__dirname, './app'),
    },
		open: true,
		compress: true,
		hot: true,
		port: 3000,
	},

/* <------ optimization ------> */

optimization: optimization(),

/* <------ Source-map ------> */

devtool: isProd ? false : 'source-map',

/* <------ Module ------> */

	module: {
		rules: [

/* <------ JS ------> */

			{
				test: /\.m?js$/i,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},

/* <------ HTML ------> */

			{
				test: /\.html$/i,
				use: [
					"html-loader",
				],
			},

/* <------ PUG ------> */

			{
				test: /\.pug$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'pug-loader',
				options: {
					pretty: true,
		 		},
			},

/* <------ SCSS ------> */

			{
					test: /\.(sa|sc|c)ss$/i,
					use: [
						{
							loader: MiniCssExtractPlugin.loader,
						},
						"css-loader",
						{
							loader: "postcss-loader",
							options: {
								postcssOptions: {
									plugins: [
										[
											"postcss-preset-env",
											{
												// Options
											},
										],
									],
								},
							},
						},
						"sass-loader",
					],
			},

/* <------ IMAGE ------> */

			{
				test: /\.(?:|png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'assets/image/[hash][ext][query]',
					},
				use: [
					{
						loader: "image-webpack-loader",
						options: {
							mozjpeg: {
								progressive: true,
								quality: 70,
							},
							optipng: {
								progressive: true,
								quality: 70,
							},
							pngquant: {
								quality: [0.65, 0.90],
          			speed: 4,
							},
							webp: {
								quality: 75,
							},
						},
					},
				],
			},

/* <------ FONT ------> */

			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'assets/font/[name][ext]',
					},
			},

		],
	},

	/* <------ Plugins ------> */

	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, `./src/index.pug`),
			filename: `index.html`,
			inject: 'body',
			minify: {
				collapseWhitespace: isProd,
			},
		}),
		...PAGES.map(page => new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/${page}`,
      filename: `./${page.replace(/\.pug/,'.html')}`,
    })),
		new MiniCssExtractPlugin({
			filename: `./css/${filename('css')}`,
		}),
	],
}