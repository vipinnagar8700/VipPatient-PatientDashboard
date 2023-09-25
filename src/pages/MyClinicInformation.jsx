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
import PropTypes from 'prop-types';
import DownloadIcon from '@mui/icons-material/Download';
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
import { Link } from 'react-router-dom';
import { GetAllPatientFiles } from '@components/Api/AllApi';

const MyClinicInformation = ({ nav }) => {
    const { period, periods, setPeriod } = usePeriodNav();
    const { index, navigate } = useArrayNav(periods);











    const [PatientSData, setPatientSData] = useState([])
    const [count, setCount] = useState(0)



    useEffect(() => {
        const fetchTemplateData = async () => {
            try {
                const data = await GetAllPatientFiles();
                console.log(data, "This Is all Billing Data!");
                setPatientSData(data.result || []);
            } catch (error) {
                console.error(error);
            }
        };

        fetchTemplateData();
    }, [count]);

    console.log(PatientSData, "PatientFiles")



    const columns = [
        {
            name: 'Issued By',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Clinic ID',
            selector: row => row.clinic_id,
            sortable: true,
            minWidth: '20px',
        },
        {
            name: 'Issued By',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Clinic Phone',
            selector: row => row.name,
            sortable: true,
        },

        {
            name: 'Issue Date',
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
        },
        {
            name: 'Valid Through',
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
        },



        {
            name: 'Actions',
            sortable: true,
            cell: (row) => (
                <>



                    <button style={{ width: '50px', backgroundColor: 'green', height: '35px', borderRadius: 4, color: 'white', fontWeight: 600, marginLeft: 2 }}  >

                       Active

                    </button>
                </>
            ),
            button: true,
            minWidth: '100px',
        },
    ];

    const data = PatientSData && PatientSData.map(item => ({
        id: item?.id || '',
        clinic_id:item?.clinic_id||'',
        name: item?.name || '',
        img: item?.file || '',
        created_at: item?.created_at || '',
    }));

    const tableData = {
        columns,
        data,
    };



    return (
        <>

            <Widget name="MyClinicInformationTabs">
                {
                    nav === 'tabs' ?
                        <WidgetHeader title="My Clinic Information" style={{ paddingBottom: 16 }} />
                        :
                        <WidgetNav title="My Clinic Information" handler={navigate} style={{ paddingBottom: 8 }} />
                }
                <WidgetBody style={{ paddingBottom: 26 }}>

                    <Card sx={{ minWidth: 445, '@media screen and (max-width: 100%)': { minWidth: '100%' }, backgroundColor: '#F1F5F8' }}>
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

MyClinicInformation.propTypes = {
    nav: PropTypes.oneOf(['arrows', 'tabs']).isRequired
}

export default MyClinicInformation;