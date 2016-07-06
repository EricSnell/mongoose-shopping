/* This file is the 'Environment File' that is used to enable us to specify
an environment when starting the application. */

// We can set the environment from within the application with 
// 'global.environment' or we can specify it as an environment variable. If
// there is no environment set then it defaults to 'development'
module.exports = global.environment || process.env.NODE_ENV || 'development';

