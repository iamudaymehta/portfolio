export const config = {
  emailJsPublicKey: process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY || '',
  emailJsServiceId: process.env.REACT_APP_EMAIL_JS_SERVICE_ID || '',
  emailJsTemplateAdmin: process.env.REACT_APP_EMAIL_JS_TEMPLATE_ADMIN || '',
  emailJsTemplateUser: process.env.REACT_APP_EMAIL_JS_TEMPLATE_USER || '',
  adminEmail: process.env.REACT_APP_ADMIN_EMAIL || '',
  nodeEnv: process.env.REACT_APP_NODE_ENV || 'development',
};

// Validate required environment variables
const requiredEnvVars = ['REACT_APP_EMAIL_JS_PUBLIC_KEY', 'REACT_APP_EMAIL_JS_SERVICE_ID', 'REACT_APP_EMAIL_JS_TEMPLATE_ADMIN', 'REACT_APP_EMAIL_JS_TEMPLATE_USER', 'REACT_APP_ADMIN_EMAIL' ];
requiredEnvVars.forEach(envVar => {
  if (!process.env[envVar]) {
    throw new Error(`Missing required environment variable: ${envVar}`);
  }
});

export default config;