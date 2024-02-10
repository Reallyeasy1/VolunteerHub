import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Annoucement1 from './annoucement.1.mdx';
import Annoucement2 from './annoucement.2.mdx';
import Annoucement3 from './annoucement.3.mdx';

function Main(props) {
  const { title } = props;

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        '& .markdown': {
          py: 3,
        },
      }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      <Stack spacing={4} sx={{ mt: 3, mb: 3 }}>
        <div>
          <Annoucement3 />
          <Divider/>
        </div>
        <div>
          <Annoucement2 />
          <Divider/>
        </div>
        <div>
          <Annoucement1 />
          <Divider/>
        </div>
      </Stack>

    </Grid>
  );
}

Main.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Main;