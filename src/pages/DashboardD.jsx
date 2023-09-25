// components
import Page from '@layout/Page';
import TaskScheduler from '@widgets/TaskScheduler';
import PatientsGenderLineChart from '@widgets/PatientsGenderLineChart';
import RadarAreaChart from '@widgets/RadarAreaChart';
import BloodTest from '@widgets/BloodTest';
import Sidebar from '@layout/Sidebar';
import Panel from '@layout/Panel';
import { Grid } from '@mui/material';
import UpcommingDashboard from './UpcommingDashboard';
import MyClinicInformation from './MyClinicInformation';
import MyFiles from './MyFile';

const DashboardD = () => {
    return (
        <>
            <Sidebar />
            <Panel />
            <Page title=" Patient Dashboard">
                <Grid container>
                    <Grid item md={6} p={1}>
                        <div key="scheduler">
                            <UpcommingDashboard />
                        </div>
                    </Grid>
                    <Grid item md={6} p={1}>
                        <div key="gender">
                            <MyClinicInformation />
                        </div>
                    </Grid>
                    <Grid item md={6} p={1}>
                        <div key="radar">
                            <MyFiles />
                        </div>
                    </Grid>



                </Grid>




            </Page>
        </>
    )
}

export default DashboardD;