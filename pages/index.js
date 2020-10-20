import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import queryGraphql from '../shared/query-graphql';
import CustomAppBar from './components/CustomAppBar';
import NewsCard from './components/NewsCard';
import Grid from '@material-ui/core/Grid';
import useSWR from 'swr';

export default function App({ news }) {
  return (
    <>
      <CustomAppBar />
      <Container>
        <Box>
          <Grid container spacing={3}>
            {news.map((newsItem, i) => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
                  <NewsCard {...newsItem} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </>
  );
}

const NEWS_QUERY = /* GraphQL */ `
  query {
    news {
      title
      points
      author
      time
      link
      commentsCount
    }
  }
`;

export async function getServerSideProps() {
  const { news } = await queryGraphql(NEWS_QUERY);
  return {
    props: { news: news || null },
  };
}
