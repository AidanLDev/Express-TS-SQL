import { Connection, Request } from "tedious";
import { userName, password } from "../db_config/secrets";

const config = {
  server: "localhost",
  authentication: {
    type: "default",
    options: {
      userName,
      password,
    },
  },
};

const connection = new Connection(config);
connection.on("connect", (err) => {
  if (err) {
    console.error(err);
  } else {
    executeStatement();
  }
});

function executeStatement() {
  const request = new Request("select 123, 'hello world'", (err, rowCount) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`${rowCount} rows`);
    }
    connection.close();
  });

  request.on("row", (columns) => {
    columns.forEach((column) => {
      if (column.value === null) {
        console.log("NULL");
      } else {
        console.log(column.value);
      }
    });
  });

  connection.execSql(request);
}
