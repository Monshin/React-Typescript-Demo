import Joi from 'joi';

type EnvNameType = 'debug' | 'debug-production' | 'production';

interface EnvDicObjectType {
  [propName: string]: string;
  debug: string;
  'debug-production': string;
  production: string;
}

const getConfig = () => {
  const envVarSchema = Joi.object()
    .keys({
      REACT_EVN: Joi.string()
        .default('debug')
        .allow(['debug', 'debug-production', 'production'])
    })
    .unknown()
    .required();

  const { error, value: envVars } = Joi.validate(
    {
      REACT_EVN: process.env.REACT_APP_ENV as EnvNameType
    },
    envVarSchema
  );

  if (error) {
    throw new Error(`Config validation error: ${error.message}`);
  }

  const PROJECT_NAME = 'react-typescript-simple';

  if (localStorage.debug) {
    localStorage.removeItem('debug');
  }
  if (envVars.REACT_EVN === 'debug') {
    localStorage.debug = `${PROJECT_NAME}:*`;
  }

  const API_URL: EnvDicObjectType = {
    debug: 'https://jsonplaceholder.typicode.com',
    'debug-production': 'https://jsonplaceholder.typicode.com',
    production: 'https://jsonplaceholder.typicode.com'
  };

  return {
    PROJECT_NAME,
    VERSION: '0.1.0',
    REACT_EVN: envVars.REACT_EVN,
    API_URL: API_URL[envVars.REACT_EVN]
  };
};

export default getConfig();
