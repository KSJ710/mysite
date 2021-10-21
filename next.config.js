const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');
const path = require('path');

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {},
      sassOptions: {
        includePaths: [path.join(__dirname, 'src/styles')],
      },
    };
  }

  return {
    env: {},
    sassOptions: {
      includePaths: [path.join(__dirname, 'src/styles')],
    },
  };
};
