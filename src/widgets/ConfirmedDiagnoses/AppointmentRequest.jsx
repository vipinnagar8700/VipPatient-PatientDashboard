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
import { GETAPPREquest, GetAppointmentRequest } from '@components/Api/AllApi';

const AppointmentRequest = ({ nav }) => {
    const { period, periods, setPeriod } = usePeriodNav();
    const { index, navigate } = useArrayNav(periods);

    const [post, setPost] = useState([])

    useEffect(() => {


        const AllAppoinementData = GETAPPREquest()
        if (AllAppoinementData) {
            AllAppoinementData.then((data) => {
                console.log(data?.result, "JJJJJJJJJJJJJJJJJJJJJJJJJJ")
                setPost(data?.result)
            })
        }
    }, [])

    const columns = [

        {
            name: 'Date/Time',
            selector: (row) => {
                const createdAt = new Date(row.created_at);
                const options = {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: false,
                };
                return createdAt.toLocaleString('en-US', options);
            },
            sortable: true,
            minWidth: '70px',
            maxWidth: '35%',
        },
        {
            name: 'Amount Paid',
            selector: (row) => row.amount,
            sortable: true,
            minWidth: '70px',
            maxWidth: '35%',
        },
        {
            name: 'Status',
            selector: (row) => `Appointment Created ( ${row.status})`,
            sortable: true,
            minWidth: '70px',
            maxWidth: '35%',
        },
    ];


    const data = post && post.map(item => ({
        id: item?.id || '',
        created_at: item?.created_at || '',
        amount: item?.amount || '',
        status: item?.status || '',
    }));

    const tableData = {
        columns,
        data,
    };




    return (
        <>

            <Widget name="AppointmentRequest">
                {
                    nav === 'tabs' ?
                        <WidgetHeader title="Appointment Request" style={{ paddingBottom: 16 }} />
                        :
                        <WidgetNav title="Appointment Request" handler={navigate} style={{ paddingBottom: 8 }} />
                }
                <WidgetBody style={{ paddingBottom: 26 }}>

                    <Card sx={{ minWidth: 732, '@media screen and (max-width: 2500px)': { minWidth: '100%' }, backgroundColor: '#F1F5F8' }}>
                        <CardContent>

                            <div className="Order Page">
                                <DataTableExtensions
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
AppointmentRequest.propTypes = {
    nav: PropTypes.oneOf(['arrows', 'tabs']).isRequired
}

export default AppointmentRequest;