import { asClass, createContainer, asFunction, asValue } from "awilix";

//app start
import Server from "./server";
import config from "../config/environments";

//routes
import Routes from "./routes";
import { contractRoutes } from "./routes/index.routes";

//controllers
import { contractCrontroller } from "./controllers";

//services
import { contractService } from "../services";

//repositories
import { contractRepository } from "../data/repositories";
import db from "../data/entities/db";

const container = createContainer();

container
  .register({
    app: asClass(Server).singleton(),
    router: asFunction(Routes).singleton()
  })
  .register({
    config: asValue(config)
  })
  .register({
    contractRoutes: asFunction(contractRoutes).singleton()
  })
  .register({
    contractController: asClass(contractCrontroller).singleton()
  })
  .register({
    contractService: asClass(contractService).singleton()
  })
  .register({
    contractRepository: asClass(contractRepository).singleton()
  })
  .register({
    db: asValue(db)
  });

module.exports = container;
