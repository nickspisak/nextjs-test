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
export default async function executeQuery({query, values}) {
  try {
    const results = await SERVER.query(query, values);
    await SERVER.end()
    return results;
  } catch (error) {
    return {error};
  }
}