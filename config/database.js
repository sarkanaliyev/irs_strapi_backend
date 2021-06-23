module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("DATABASE_HOST", "http://10.2.214.3"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "mirs"),
        username: env("DATABASE_USERNAME", "postgres"),
        password: env("DATABASE_PASSWORD", "Sarxantugay1"),
        ssl: env.bool("DATABASE_SSL", false),
      },
      options: {},
    },
  },
});
