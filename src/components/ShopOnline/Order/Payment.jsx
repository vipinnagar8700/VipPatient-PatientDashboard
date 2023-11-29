// components
import Page from '@layout/Page';
import ModalWindow from '@components/ModalWindow';
import Tab from 'react-bootstrap/Tab';
import Content from '@components/Reviews/Content';
import ReviewsRatingList from '@components/Reviews/List';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
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
import { Grid, Stack } from '@mui/material';
// hooks
import { useState, useEffect } from 'react';
import { GetAllORderData, getPaymentDetails } from '@components/Api/AllApi';
import { Link } from 'react-router-dom';
import { textAlign } from '@mui/system';
import Sidebar from '@layout/Sidebar';
import Panel from '@layout/Panel';



const Payment = () => {
    const [Orderse, SetOrder] = useState([])
    const [selectedTab, setSelectedTab] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const smallScreen = window.matchMedia('(max-width: 1038.98px)').matches;

    const handleModalClose = () => {
        setOpenModal(false);
        setSelectedTab('');
    }

    window.addEventListener('resize', () => {
        if (smallScreen) {
            handleModalClose();
        }
    });

    useEffect(() => {


        const GetOrder = getPaymentDetails()
        if (GetOrder) {
            GetOrder.then((data) => {
                console.log(data.result, "GGGGGGGGGGGGGGGGGGGG")
                SetOrder(data.result)
            })
        }
        else {
            console.log("error")
        }
    }, [])

    const columns = [
        {
            name: 'Payment ID',
            selector: (row) => row.order_id,
            sortable: true,
        },
        {
            name: 'Payment Date',
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
            name: '	Payment To',
            selector: (row) => row.company_name,
            sortable: true,

        },

        {
            name: 'Payment Status',
            selector: (row) => row.status,
            sortable: true,
        },
        {
            name: 'Amount',
            selector: (row) => row.total_amount,
            sortable: true,
        },

    ];


   
    console.log(Orderse, "KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKk")
    const data = Orderse && Orderse.map(item => ({
        id: item?.id || '',
        order_id: item?.order_id || '',
        created_at: item?.created_at || '',
        company_name: item?.company?.[0]?.company_name || '',
        total_amount: item?.amount || '',
        status: item?.status || '',
        updated_at: item?.updated_at || '',
    }));


    const tableData = {
        columns,
        data,
    };
    
  

    return (
        // <Tab.Container transition={true} activeKey={selectedTab} onSelect={setSelectedTab}>
        //     <Page title="My Order">
        <>
                    <Card sx={{ '@media screen and (max-width: 1200px)': { minWidth: '100%' } }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 16, fontWeight: 400 }} color="text.secondary" gutterBottom>
                               Payment Information
                            </Typography>
                            <Card sx={{ '@media screen and (max-width: 1200px)': { minWidth: '100%' }, backgroundColor: '#F1F5F8' }}>
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
                          
                        </CardContent>

                    </Card>

        </>


    )
}

export default Payment;