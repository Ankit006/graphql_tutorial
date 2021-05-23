const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const schema = require("./Schema/index");
const { graphqlHTTP } = require("express-graphql");

//type defintation

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);
app.listen(port, () => {
  console.log("server is running");
});
