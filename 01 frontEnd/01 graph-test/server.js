const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const db = require("./db");

const port = process.env.PORT || 9000;
const app = express();

const fs = require("fs");
const typeDefs = fs.readFileSync("./schema.graphql", { encoding: "utf-8" });
const resolvers = require("./resolvers");

const { makeExecutableSchema } = require("graphql-tools");
const schema = makeExecutableSchema({ typeDefs, resolvers });

app.use(cors(), bodyParser.json());

const { graphiqlExpress, graphqlExpress } = require("apollo-server-express");
app.use("/graphql", graphqlExpress({ schema }));
app.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));

app.listen(port, () => console.info(`Server started on port ${port}`));

//客户端集成
// 1 直接请求
// axios ajax fetch quest
// $.ajax({url: "http://localhost:9000/graphql",
//                   contentType: "application/json",type:'POST',
//                   data: JSON.stringify({ query:`{sayHello(name:"阿达")}` ,variables:null}),
//                   success: function(result) {
//                      console.log(JSON.stringify(result))
//                   }
//                });
// 2. apollo client
// import {ApolloClient, HttpLink, InMemoryCache} from 'apollo-boost'
// import gql from 'graphql-tag'
// const endPointUrl = 'http://localhost:9000/graphql'
// const client = new ApolloClient({
//    link: new HttpLink({uri:endPointUrl}),
//    cache:new InMemoryCache()
// });
// async function loadStudentsAsync() {
//     const query = gql`
//     {
//        students{
//           id
//           firstName
//           lastName
//           college{
//              name
//           }
//        }
//     }`
//     const {data} = await client.query({query}) ;
//     return data.students;
//  }

// 验证客户端
// https://codingdict.com/article/23283
