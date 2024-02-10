import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Activity1 from './activity.1.mdx';
import Activity2 from './activity.2.mdx';
import Activity3 from './activity.3.mdx';

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
          <Activity3 />
          <Divider/>
        </div>
        <div>
          <Activity2 />
          <Divider/>
        </div>
        <div>
          <Activity1 />
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