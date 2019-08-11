const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const server = express();

mongoose.connect(
  "mongodb+srv://thiag0coelho:kec7Q66Z3vyEfEg@7180-ou3jv.azure.mongodb.net/omnistack?retryWrites=true&w=majority",
  {
    useNewUrlParser: true
  }
);

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);
 