// components
import Page from '@layout/Page';
import TasksList from '@widgets/TasksList';
import ConfirmedDiagnoses from '@widgets/ConfirmedDiagnoses';
import DiagnosesDonut from '@widgets/DiagnosesDonut';
import RadarAreaChart from '@widgets/RadarAreaChart';
import Sidebar from '@layout/Sidebar';
import Panel from '@layout/Panel';
import AppointmentRequest from '@widgets/ConfirmedDiagnoses/AppointmentRequest';

const DashboardC = () => {
    return (
        <><Sidebar/>
        <Panel/>
        <Page title="Appointments">
            <div key="task-list">
                <TasksList />
            </div>
            <div key="confirmed">
                <ConfirmedDiagnoses nav="arrows" />
            </div>
            

            
        </Page>
        </>
        
    )
}

export default DashboardC;