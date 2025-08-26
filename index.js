const dotenv = require ("dotenv")
const app = require ("./App");


dotenv.config();
Loaders.start ();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log("Servidor rodando!"))