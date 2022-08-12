import { Avatar, Card, CardContent, Grid, Typography } from '@mui/material';
import FunctionsIcon from '@mui/icons-material/Functions';
export const Assunto = (props) => (
  <Card {...props}>
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
          Assunto
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            Subtopic
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'primary.main',
              height: 56,
              width: 56
            }}
          >
            <FunctionsIcon />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);
