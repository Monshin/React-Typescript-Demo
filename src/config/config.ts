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

  const API_URL: EnvDicObjectType = {
    debug: 'http://127.0.0.1:8080',
    'debug-production': 'http://127.0.0.1:8888',
    production: 'https://simple.com'
  };

  return {
    REACT_EVN: envVars.REACT_EVN,
    VERSION: '0.1.0',
    API_URL: API_URL[envVars.REACT_EVN],
  };
};

export default getConfig();
