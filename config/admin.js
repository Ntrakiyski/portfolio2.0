module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9fa6594d1b196fdba81ea6c812c66596'),
  },
});
