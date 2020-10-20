import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import queryGraphql from '../shared/query-graphql';
import CustomAppBar from './components/CustomAppBar';
import NewsCard from './components/NewsCard';
import Grid from '@material-ui/core/Grid';

export default function App({ news }) {
  return (
    news && (
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
    )
  );
}

export async function getServerSideProps() {
  const { news } = await queryGraphql(`
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
  `);
  return { props: { news } };
}
