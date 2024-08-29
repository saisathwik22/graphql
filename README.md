<<<<<<< HEAD
# GraphQL expense tracker.

<!-- mongodatabase cred:
password:
1lnYRSvIRuhiSr6j -->
=======
# GraphQL - Build an Expense Tracker App

![Demo App](https://i.ibb.co/WHyMscm/Screenshot-42.png)



Welcome to the MERN GraphQL Expense Tracker App! This project is designed to help you manage your expenses efficiently using a modern tech stack and GraphQL.

## Features:

-   🌟 Tech stack: MERN (MongoDB, Express.js, React.js, Node.js) + Apollo GraphQL
-   📝 Learn type definitions and resolvers for defining GraphQL schema and data fetching logic
-   🔄 Mutations for modifying data in the GraphQL API and establishing graph relations
-   🎃 Authentication with Passport.js and MongoDB session store
-   🚀 Global state management with Apollo Client
-   🐞 Error handling both on the server and on the client
-   ⭐ Deployment made easy with a platform called Render
-   👾 Cron jobs for scheduled tasks and automation
-   ⏳ And much more!

### Setup .env file

```js
MONGO_URI=...
SESSION_SECRET=...
```

### Build the app

```shell
npm run build
```

# GraphQL expense tracker.

mongodatabase cred:
password:
1lnYRSvIRuhiSr6j
>>>>>>> eac3e6fc972d2ffdb6f57b38f82bdd8e8e590c0b

<!-- mongo uri
mongodb+srv://reddysaisathwik022:1lnYRSvIRuhiSr6j@cluster0.kfoep.mongodb.net/gql-db?retryWrites=true&w=majority&appName=Cluster0
 -->

### packages installed

```bash
npm install express express-session graphql @apollo/server @graphql-tools/merge bcryptjs connect-mongodb-session dotenv graphql-passport passport mongoose
```

### graphql package =>

- It is core GraphQL implementation in JavaScript
- provides funtionality to define GraphQL schemas, parse and validate GraphQL queries, execute queries against a schema, and format response.
- graphql is not tied to any specific server or client framework, it is a standalone library that can be used in various JS environments.

### @apollo/server =>

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

### Rest API

client --- [get, post, put, delete] ---> [nodejs + express][/api/users, /api/posts, /api/posts/:id] -----> Database

- As we can see, there multiple api endpoints for rest API.

### GraphQL

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
<<<<<<< HEAD
=======

### Start the app

```shell
npm start
```
>>>>>>> eac3e6fc972d2ffdb6f57b38f82bdd8e8e590c0b
