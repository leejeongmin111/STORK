const express = require("express");
const app = express();
const router = require("./router/router");
const bodyParser = require("body-parser");
const mysql = require("mysql2"); //설치한 mysql기능
//const session = require("express-session");
//const session_mysql_save = require("express-mysql-session");

const path = require("path");
const cors = require("cors");

app.use(express.static(path.join(__dirname, "build")));

app.use(express.json());
app.use(cors());


let dbInfo = {
    host: "project-db-stu.ddns.net",
    user: "baebae",
    password: "baebae",
    port: "3307",
    database: "baebae",
  };

  
// var connection;

// function handleDisconnect() {
//   connection = mysql.createConnection(dbInfo); // Recreate the connection, since
//                                                   // the old one cannot be reused.

//   connection.connect(function(err) {              // The server is either down
//     if(err) {                                     // or restarting (takes a while sometimes).
//       console.log('error when connecting to db:', err);
//       setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
//     }                                     // to avoid a hot loop, and to allow our node script to
//   });                                     // process asynchronous requests in the meantime.
//                                           // If you're also serving http, display a 503 error.
//   connection.on('error', function(err) {
//     console.log('db error', err);
//     if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
//       handleDisconnect();                         // lost due to either server restart, or a
//     } else {                                      // connnection idle timeout (the wait_timeout
//       throw err;                                  // server variable configures this)
//     }
//   });
// }

// handleDisconnect();
 
// let SMS = new session_mysql_save(dbInfo);

// app.use(session({
//     secret: 'smart',
//     resave: false,
//     saveUninitializedt: true,
//     store: SMS
// }))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(router);
app.listen(3001);
