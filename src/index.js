import container from "./api/container";
const db = container.resolve("db");
const app = container.resolve("app");

app
  .start()
  .then(async () => {
    await db.sequelize.sync();
  })
  .catch(err => {
    console.error(err);
  });
