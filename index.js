const app = require("./app");
var http = require("http").Server(app);
const PORT = process.env.PORT || 3000;

http.listen(PORT, (err) =>
  err
    ? console.log("Hubo un error")
    : console.log(`La api esta corriendo en puerto ${PORT}`)
);
