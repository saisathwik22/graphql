# graphql package =>

- It is core GraphQL implementation in JavaScript
- provides funtionality to define GraphQL schemas, parse and validate GraphQL queries, execute queries against a schema, and format response.
- graphql is not tied to any specific server or client framework, it is a standalone library that can be used in various JS environments.

# @apollo/server =>

- its part of Apollo ecosystem and used for building GraphQL servers in nodejs.
- provides tools and utilities to create and manage GraphQL schemas, handle incoming GraphQL requests, execute queries and send response.
- built on top of popular express framework, making it easy to integrate GraphQL into existing nodejs web apps.
- Overall, it simplifies process of creating and maintaining GraphQL servers in nodejs environments.

### REST API

/api/user/10 ->
{
id: 10,
username: sai,
name: "Sai",
bankAccId: 7
}
/api/bank/7 ->
{
id: 7,
name: "xyz",
location: "hyd",
}

- To fetch user and bank details of the specific users, we must fetch two api's.
- This is where graphQL comes into play.

### GraphQL

/graphql ->
{
id: 10,
username: sai,
name: "Sai",
bankAcc: {
id: 7,
name: "xyz",
location: "hyd",
}
}

- fetch multiple resources through single api request.

# Rest API

client --- [get, post, put, delete] ---> [nodejs + express][/api/users, /api/posts, /api/posts/:id] -----> Database

- As we can see, there multiple api endpoints for rest API.

# GraphQL

client --- [Query, Mutation, apollo server] ---> [nodejs + expressjs + graphQL][/graphql] ----> database

- query
- mutation
- resolver
- response

- Problem of hitting multiple api endpoints resolved, single endpoint /graphql is used.
- GraphQL queries access not only properties of one resource but also smoothly follow references between them.
- Typical Rest API require loading from multiple URLs.
- GraphQL APIs get all the data your app needs in a single request.
- Apps using GraphQL can be quick even on slow mobile network connections.

# What is GraphQL Schema?

- A GraphQL schema is a fundamental concept in GraphQL.
- It defines structure of data that clients can query and operations they can perform. A schema in GraphQL typically consists of two main parts: typeDefs and resolvers.

# What are TypeDefs? (or Type Definitions)

- Type Definitions define the shape of data available in GraphQL API. They specify types of objects that can be queried and relationships between them.

# What are Resolvers?

- Resolvers are functions that determine how to fetch data associated with each field in schema.
