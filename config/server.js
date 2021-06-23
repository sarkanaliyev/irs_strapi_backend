module.exports = ({ env }) => ({
  host: env("HOST", "10.2.214.2"),
  port: env.int("PORT", 80),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "8437314f82ba7173d8f3e96a7ec6d492"),
    },
  },
});
