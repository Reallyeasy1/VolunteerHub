import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

function FeatureCard(props) {
  const { feature } = props;

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {feature.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {feature.status}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {feature.description}
            </Typography>
            <Button variant="outlined">
              {feature.buttonLabel}
            </Button>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image={feature.image}
            alt={feature.imageLabel}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}

FeatureCard.propTypes = {
  feature: PropTypes.shape({
    status: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeatureCard;
