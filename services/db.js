// export const SERVER =
//   "https://api-us-east-1.hygraph.com/v2/cl747sm9y3uxx01uhelgabq2c/master";
import mysql from 'serverless-mysql';
const SERVER = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD
  }
});
SERVER.getConnection((err) => {
  if (err) {
    console.log("Error Connecting to db");
  }
  console.log("connected to db");
})
export default async function executeQuery({query, arraParams}) {
  return new Promise((resolve, reject) => {
    try {
      SERVER.query(query, arraParams, (err, data) => {
        if (err) {
          console.log("error in executing query");
          reject(err);
        }
        resolve(data)
      })
    } catch(err) {
      reject(err);
    }
  })
}