const app = require("./app");
const dotenv = require("dotenv");

//config
dotenv.config({ path: "server/config/config.env" });

app.listen(process.env.PORT, () => {
  console.log(`Server is working at http://localhost:${process.env.PORT}`);
});
