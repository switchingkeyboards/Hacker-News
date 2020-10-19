import React from 'react';
import useStyles from '../styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function NewsCard({ title, points, author, time, link, commentsCount }) {
  const classes = useStyles();
  return (
    <Card>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {author}
        </Typography>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {time}
        </Typography>
        <Typography variant="body2" component="p">
          Comments Count: {commentsCount}
          <br />
          Points: {points}
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="primary" size="small" href={`https://${link}`}>
          Visit {link}
        </Button>
      </CardActions>
    </Card>
  );
}
