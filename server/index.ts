import express from "express";
import { createServer } from "http";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";
import mysql from "mysql2"; // Recomendo usar mysql2 para evitar erros de senha

// 1. Configuração ÚNICA do Banco
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'daiane241103',
  database: 'db_user'
});


con.connect((err) => {
  if (err) {
    console.error("Erro na conexão com MySQL:", err.message);
    return;
  }
  console.log('MySQL conectado com sucesso!');
});


const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());

async function startServer() {
  const app = express(); // Usaremos apenas este app
  const server = createServer(app);

  // 2. Rota do Banco de Dados (API)
  // /api para não confundir com o site
  app.get('/db/usuarios', (req, res) => {
    con.query('SELECT * FROM USUARIOS', (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(results);
    });
  });

  // 3. Configuração de Arquivos Estáticos (Site)
  let staticPath = process.env.NODE_ENV === "production" 
    ? path.resolve(__dirname, "public")
    : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // 4. Fallback para o site ou erro amigável
  app.get("*", (req, res) => {
    const indexPath = path.join(staticPath, "index.html");
    
    // Se o arquivo existe (após o build), ele envia. Se não, avisa.
    res.sendFile(indexPath, (err) => {
      if (err) {
        // Se chegar aqui, é porque você está na porta 3000 mas não fez o build
        res.status(200).send("<h1>Servidor Ativo!</h1><p>Acesse <a href='/db/usuarios'>/db/usuarios</a> para ver os dados do banco.</p>");
      }
    });
  });

  const port = 3000;
  server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/`);
  });
}

startServer().catch(console.error);