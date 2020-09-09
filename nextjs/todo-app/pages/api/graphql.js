import Cors from 'micro-cors';
import {ApolloServer, gql} from 'apollo-server-micro';
import knex from 'knex';

const db = knex({
    client: "pg",
    connection: process.env['DBCONN_STRING'],
});

const schema = gql`
  type Query {
    todos: [Todo]!
    todo(id: ID!): Todo
  }

  type Todo {
    id: ID!
    description: String!
    done: Boolean!
  }

  type Mutation {
    createTodo(description: String!, done: Boolean): Todo
    completeTodo(id: ID!): Todo
  }
`;

const resolvers = {
    Query: {
        todos: (_parent, _args, _context) => {
            return db
                .select("*")
                .from("todos")
                .orderBy("id")
        },
        todo: (_parent, {id}, _context) => {
            return db
                .select("*")
                .from("todos")
                .where({id})
                .first()
        }
    },
    Mutation: {
        createTodo: async (_, {description, done}, _c) => {
            return (await db("todos").insert({description, done}).returning("*"))[0]
        },
        completeTodo: async (_, {id}, _c) => {
            return (await db("todos").select("*").where({id}).update({done: true}).returning("*"))[0];
        }
    }
}

const apolloServer = new ApolloServer({
    typeDefs: schema,
    resolvers,
    context: () => {
        return {}
    }
});

const handler = apolloServer.createHandler({path: "/api/graphql"});

export const config = {
    api: {
        bodyParser: false
    }
};

const cors = Cors({
    allowMethods: ["POST", "OPTIONS"]
});

export default cors(handler);
