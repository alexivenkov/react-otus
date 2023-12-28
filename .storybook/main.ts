import { Configuration } from 'webpack';
import path from "path";
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';

const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-scss"
  ],
  webpackFinal: async (config: Configuration): Promise<Configuration> => {
    config.resolve.plugins = config.resolve.plugins || [];
    config.resolve.plugins.push(
        new TsconfigPathsPlugin({
          configFile: path.resolve(__dirname, "../tsconfig.json"),
        })
    );

    config.resolve.alias = {
      ...config.resolve.alias,
      '@/src': path.join(__dirname, 'src'),
    }
    
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '[name]__[local]--[hash:base64:5]',
            },
          },
        },
        'sass-loader',
      ],
      include: /\.module\.scss$/,
    });

    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      exclude: /\.module\.scss$/,
    });

    return config;
  },
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
