import http from "node:http";
import os from "node:os";
import next from "next";
import { parse } from "node:url";

const dev = process.env.NODE_ENV !== "production";
const hostname = process.env.HOST || process.env.HOSTNAME || "127.0.0.1";
const port = Number.parseInt(process.env.PORT || "3000", 10);

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    http
      .createServer((req, res) => {
        const parsedUrl = parse(req.url || "/", true);
        handle(req, res, parsedUrl);
      })
      .listen(port, hostname, () => {
        const localUrl = `http://${hostname === "0.0.0.0" ? "localhost" : hostname}:${port}`;
        console.log(`> Ready on ${localUrl}`);

        if (hostname === "0.0.0.0") {
          const interfaces = os.networkInterfaces();
          const addresses = Object.values(interfaces)
            .flat()
            .filter((details) => details?.family === "IPv4" && !details.internal)
            .map((details) => details.address);

          if (addresses.length) {
            console.log(`> Network: http://${addresses[0]}:${port}`);
          }
        }
      });
  })
  .catch((error) => {
    console.error("Failed to start Next.js server.");
    console.error(error);
    process.exit(1);
  });
