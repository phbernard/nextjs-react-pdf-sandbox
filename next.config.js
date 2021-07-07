module.exports = {
  target: "serverless", // For next-on-netlify
  webpack: (config) => {
    // load worker files as a urls with `file-loader`
    config.module.rules.unshift({
      test: /pdf\.worker\.(min\.)?js/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[contenthash].[ext]",
            publicPath: "_next/static/worker",
            outputPath: "static/worker"
          }
        }
      ]
    });

    // Enable these externals to build
    /*
    config.externals = {
      ...config.externals,
      canvas: 'canvas',
      critters: 'critters'
    };
    */

    return config;
  }
};
