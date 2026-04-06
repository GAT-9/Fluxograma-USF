import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Determine static files path - try multiple locations for robustness
  let staticPath: string;
  
  // In production (bundled by esbuild), __dirname is dist/
  // In development, __dirname is root/server/
  if (process.env.NODE_ENV === "production") {
    // production: __dirname = dist/, look for dist/public/
    staticPath = path.resolve(__dirname, "public");
  } else {
    // development: __dirname = server/, look for dist/public/
    staticPath = path.resolve(__dirname, "..", "dist", "public");
  }

  // Debug logging
  console.log(`[Server] NODE_ENV: ${process.env.NODE_ENV}`);
  console.log(`[Server] __dirname: ${__dirname}`);
  console.log(`[Server] StaticPath: ${staticPath}`);

  // Check if static path exists
  const { existsSync } = await import("fs");
  if (!existsSync(staticPath)) {
    console.error(`[Server] ERROR: Static path does not exist: ${staticPath}`);
    console.error(`[Server] This usually means the build was not run. Run 'npm run build' first.`);
  }

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    const indexPath = path.join(staticPath, "index.html");
    console.log(`[Server] Attempting to serve: ${indexPath}`);
    res.sendFile(indexPath, (err) => {
      if (err) {
        console.error(`[Server] Error serving index.html:`, err);
        res.status(500).send("Error loading application");
      }
    });
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
