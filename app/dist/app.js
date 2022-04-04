import db from './src/config/dbConnect.js';
import express from 'express';
import routes from './src/routes/indexRoutes.js';
db.on("error", () => console.log.bind(console, "Erro de conexão"));
db.once("open", () => console.log("Conexão feita com sucesso"));
const app = express();
app.use(express.json());
routes(app);
export default app;
