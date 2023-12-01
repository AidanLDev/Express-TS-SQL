const { SQL_USER, SQL_PASSWORD } = process.env;

export const config = {
  user: SQL_USER,
  password: SQL_PASSWORD,
  server: "localhost",
  database: "shop",
  options: {
    trustServerCertificate: true,
    enableArithAbort: true,
  },
  port: 1433,
};
