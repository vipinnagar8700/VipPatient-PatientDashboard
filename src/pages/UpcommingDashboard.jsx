// components
import Widget from '@components/Widget';
import WidgetHeader from '@components/Widget/WidgetHeader';
import WidgetNav from '@components/Widget/WidgetNav';
import WidgetBody from '@components/Widget/WidgetBody';
import ConfirmedDiagnosesList from '@widgets/ConfirmedDiagnoses/List';
import PeriodNav from '@components/PeriodNav';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';

// utils
import PropTypes from 'prop-types';

// hooks
import usePeriodNav from '@hooks/usePeriodNav';
import useArrayNav from '@hooks/useArrayNav';

// data placeholder
import { confirmed } from '@db/confirmed';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Badge from '@mui/material/Badge';
import { Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { UpcommingAppointmtnt } from '@components/Api/AllApi';

const UpcommingDashboard = ({ nav }) => {
    const { period, periods, setPeriod } = usePeriodNav();
    const { index, navigate } = useArrayNav(periods);
    const [PatientSData, setPatientSData] = useState([])
    const [count, setCount] = useState(0)


    useEffect(() => {


        const APPDATA = UpcommingAppointmtnt()
        if (APPDATA) {
            APPDATA.then((data) => {
                console.log(data, "Upcomming Appointment Data!")
                setPatientSData(data.result || []);
            })
        }



    }, [])


    const columns = [

        {
            name: 'Date/Time',
            selector: row => row.name,
            sortable: true,
            minWidth: '70px',
            maxWidth: '35%',
        },
        {
            name: 'Location',
            selector: row => row.created_at,
            sortable: true,
            minWidth: '70px',
            maxWidth: '35%',
        },
        {
            name: 'Other Information',
            selector: row => `${row.img} w/ ${row.clinic_name}`,
            sortable: true,
            minWidth: '70px',
            maxWidth: '35%',
        },
    ];


    const data = PatientSData && PatientSData.map(item => ({
        id: item?.id || '',
        clinic_name: item?.clinic?.[0]?.clinic_name || '',
        name: item?.start_date || '',
        img: item?.doctor?.[0]?.name || '',
        created_at: item?.location?.[0]?.name || '',
    }));


    const tableData = {
        columns,
        data,
    };


    return (
        <>

            <Widget name="UpcommingDashboardTabs">
                {
                    nav === 'tabs' ?
                        <WidgetHeader title="Upcoming Appointments" style={{ paddingBottom: 16 }} />
                        :
                        <WidgetNav title="Upcoming Appointments" handler={navigate} style={{ paddingBottom: 8 }} />
                }
                <WidgetBody style={{ paddingBottom: 26 }}>

                    <Card sx={{ minWidth: 445, '@media screen and (max-width: 100%)': { minWidth: '100%' }, backgroundColor: '#F1F5F8' }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 12 }}>If you are unable to keep your appointment kindly give at least 48 hours notice. All no shows within 48 hours may be subject to a cancellation fee added to your next appointment.</Typography>
                            <div className="Order Page">
                                <DataTableExtensions export={false} print={false}
                                    {...tableData}
                                >
                                    <DataTable
                                        noHeader
                                        defaultSortField="id"
                                        defaultSortAsc={false}
                                        pagination
                                        highlightOnHover
                                    />
                                </DataTableExtensions>
                            </div>
                        </CardContent>

                    </Card>

                </WidgetBody>
            </Widget>
        </>
    )
}

UpcommingDashboard.propTypes = {
    nav: PropTypes.oneOf(['arrows', 'tabs']).isRequired
}

export default UpcommingDashboard;