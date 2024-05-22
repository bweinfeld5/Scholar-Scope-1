module.exports = {
  future: {
    webpack5: true,
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.cache = {
        type: 'filesystem',
      };
    }
    config.module.rules.push({
      test: /\.css$/,
      exclude: /use\.typekit\.net/,
      use: [
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
          },
        },
      ],
    });
    return config;
  },
};