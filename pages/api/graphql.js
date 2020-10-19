import { ApolloServer, gql, makeExecutableSchema } from 'apollo-server-micro';
import scraper from './scraper';

const typeDefs = gql`
  type Query {
    news: [News!]!
  }
  type News {
    title: String
    points: String
    author: String
    time: String
    commentsCount: Int
    link: String
  }
`;

const resolvers = {
  Query: {
    async news() {
      const news = await scraper();
      console.log(news);
      return news;
    },
  },
};

export const schema = makeExecutableSchema({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default new ApolloServer({ schema }).createHandler({
  path: '/api/graphql',
});
