const {
  NODE_ENV: mode = 'development',
} = process.env;

interface IConfig {
  isDevelopment: boolean;
  apiUrl: string;
  apiHost: string;
}

let config: IConfig;
let envConfig;

const app = {};

try {
  envConfig = require(`./${mode}`);
  config = { ...app, ...envConfig.default };
} catch (e) {
  throw new Error('INVALID CONFIG FILE');
}

export default Object.freeze(config);
