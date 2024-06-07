// next.config.js
const path = require('path');

module.exports = {
  webpack(config, { isServer }) {
    // Enable CSS imports in all components
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: false,
          },
        },
        'sass-loader',
      ],
      include: path.resolve(__dirname, 'src'),
    });

    return config;
  },
};
