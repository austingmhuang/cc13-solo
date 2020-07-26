import app from './app';
const PORT = 3000;
import connection from "./database";
connection.connect().then(async connection => {
  app.listen(PORT, () => {
    console.info('Express server listening on http://localhost:3000');
  });
}).catch(error => {
  console.error("Error ", error);
});
