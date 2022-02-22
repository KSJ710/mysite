const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');
const path = require('path');

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      sassOptions: {
        includePaths: [path.join(__dirname, 'src/styles')],
      },
      webpack: (config, { isServer }) => {
        if (!isServer) {
          config.resolve.fallback.fs = false;
          config.resolve.fallback.child_process = false;
          config.resolve.fallback.net = false;
          config.resolve.fallback.dns = false;
          config.resolve.fallback.tls = false;
        }
        return config;
      },
    };
  }

  return {
    sassOptions: {
      includePaths: [path.join(__dirname, 'src/styles')],
    },
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback.fs = false;
        config.resolve.fallback.child_process = false;
        config.resolve.fallback.net = false;
        config.resolve.fallback.dns = false;
        config.resolve.fallback.tls = false;
      }
      return config;
    },
  };
};
