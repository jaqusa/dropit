import express from "express";

class Server {
  constructor({ config, router }) {
    this._config = config;
    this._express = express();
    this._express.use(router);
  }

  async start() {
    const http = await this._express.listen(this._config.PORT);
    const { port } = http.address();
    console.log(`Server listen on port ${port}`);
  }
}

export default Server;
