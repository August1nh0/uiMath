import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import { Budget } from '../components/dashboard/budget';
import { LatestOrders } from '../components/dashboard/latest-orders';
import { Sales } from '../components/dashboard/sales';
import { TasksProgress } from '../components/dashboard/tasks-progress';
import { TotalCustomers } from '../components/dashboard/total-customers';
import { TotalProfit } from '../components/dashboard/total-profit';
import { DashboardLayout } from '../components/dashboard-layout';
import { Materia } from '../components/dashboard/materia';
import { Assunto } from 'src/components/dashboard/Assunto';
const Dashboard = () => (
  <>
    <Head>
      <title>
        Home|Math
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
         
          <Grid
          item
          xl={3}
          lg={3}
          sm={6}
          xs={12}>
         <Assunto />
          </Grid>
         
            <Materia />
      
        </Grid>
        <div align ="center">
        <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <Sales />
          </Grid>
      
        <Grid
            item
            lg={8}
            md={6}
            xl={3}
            xs={12}
            alignContent="center"
          >
            <LatestOrders />
          </Grid>
          </div>
      </Container>
    </Box>
  </>
);

Dashboard.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Dashboard;
