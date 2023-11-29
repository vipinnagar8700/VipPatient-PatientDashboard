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
import { GetAllORderData } from '@components/Api/AllApi';
import { Link } from 'react-router-dom';
import { textAlign } from '@mui/system';
import Sidebar from '@layout/Sidebar';
import Panel from '@layout/Panel';
import Payment from './Payment';



const OrderList = () => {
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


        const GetOrder = GetAllORderData()
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
            name: 'Order ID',
            selector: (row) => row.order_id,
            sortable: true,
        },
        {
            name: 'Order Booking Date',
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
            name: '	Provider Name',
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
        company_name: item?.company?.company_name || '',
        total_amount: item?.total_amount || 0,
        status: item?.status || '',
        updated_at: item?.updated_at || '',

    }));

    const totalAmountSum = Orderse.reduce((sum, item) => sum + parseFloat(item?.total_amount || 0), 0);

console.log('Total Amount Sum:', totalAmountSum);


   
    const tableData = {
        columns,
        data,
    };
   
    return (
        // <Tab.Container transition={true} activeKey={selectedTab} onSelect={setSelectedTab}>
        //     <Page title="My Order">
        <>
        <Sidebar/>
        <Panel/>
            <Page title="View Order">
                <div key="balance">
                    <Card sx={{  '@media screen and (max-width: 1200px)': { minWidth: '100%' } }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 16, fontWeight: 400 }} color="text.secondary" gutterBottom>
                                View Order
                            </Typography>
                            <Card sx={{  '@media screen and (max-width: 1200px)': { minWidth: '100%' }, backgroundColor: '#F1F5F8' }}>
                                <CardContent>
                                    {/* <Typography sx={{ fontSize: 13, fontWeight: 300 }} color="text.secondary" gutterBottom>
                                        Created On :
                                    </Typography>
                                    <Typography sx={{ fontSize: 13, fontWeight: 300 }} color="text.secondary" gutterBottom>
                                        Status :
                                    </Typography>
                                    <Typography sx={{ fontSize: 13, fontWeight: 300 }} color="text.secondary" gutterBottom>
                                        Order Contents
                                    </Typography> */}
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
                            <Grid container m={2}>
                                <Grid items xs={9}>
                                   
                                    <br/>
                                   <Typography sx={{fontSize:20,fontWeight:'900'}}>Total:	${totalAmountSum}.00</Typography> 
                                    
                                </Grid>
                            </Grid>
                            <Payment/>
                        </CardContent>

                    </Card>
                </div>

            </Page>

        </>


    )
}

export default OrderList;