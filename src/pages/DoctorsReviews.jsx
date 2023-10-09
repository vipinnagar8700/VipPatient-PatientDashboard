// components
import * as React from 'react';
import Url from '../url/Allurl'
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
import Badge from '@mui/material/Badge';
import { Stack, Grid } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Modal from '@mui/material/Modal';
import { Dialog, DialogTitle, DialogContent, IconButton, TextField, Select, MenuItem, InputLabel } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// hooks
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import Sidebar from '@layout/Sidebar';
import Panel from '@layout/Panel';

const Style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // width: 600,
    minWidth: 800,
    bgcolor: 'background.paper',
    border: '1px solid #f3f3f3',
    boxShadow: 24,
    p: 4,
    backgroundColor: "red",
    maxWidth: "100%",
    minWidth: "500px",
};



const DoctorsReviews = () => {
    const [post, setPost] = useState([])

    const [selectedOption, setSelectedOption] = useState('');
    const [open, setOpen] = useState(false);

    const [showp, setshowp] = useState(false)

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setshowp(false);
    };

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };



    useEffect(() => {
        ViewProduct();

    }, [])


    const ViewProduct = () => {
        let token = Cookies.get("user")
        console.log(token, "This Is token for all Api's")
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", `Bearer ${token}`);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        return fetch(`${Url}/api/get_provider_company`, requestOptions)
            .then((res) => res.json())
            .then((json) => {
                console.log(json, "This Is Product Data!");
                setPost(json?.result);
            })
            .catch((e) => console.log(e));
    }



    console.log(post, "This Is all Product Data ye!")

    const ProductDataList = post || [];
    console.log(ProductDataList, "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");

    const columns = [
        {
            name: 'MMTC',
            selector: row => row.name,
            sortable: true,
            minWidth: '200px',
        },
        {
            name: 'Address',
            selector: row => row.address,
            sortable: true,
            minWidth: '200px',
        },
        {
            name: 'Phone Number',
            selector: row => row.phone,
            sortable: true,
            minWidth: '200px',
        },
        {
            name: 'Email',
            selector: row => row.email,
            sortable: true,
            minWidth: '200px',
        },
        {
            name: 'Actions',
            sortable: true,
            cell: (row) => (
                <button style={{ width: '150px', backgroundColor: '#2BAA27', height: '40px', borderRadius: 4, color: 'white', fontWeight: 600 }} startIcon={<AddShoppingCartIcon />} sx={{ fontWeight: 300 }} >
                    <Link to={`/patients/dashboard/shop/1/products/${row.id}`}>
                        Shop Now
                    </Link>

                </button>
            ),
            button: true,
            minWidth: '200px',
        },

    ];


    const data = post.map(item => ({
        id: item?.id || '',
        name: item?.company_name || '',
        address: item?.address || '',
        phone: item?.phone || '',
        email: item?.email || '',
    }));



    const tableData = {
        columns,
        data,
    };

    const Popup_style = {
        minWidth: "500px",
        backgroundColor: "green"
    }

    return (
        <>
            <Sidebar />
            <Panel />
            {/* {
                showp &&
                <Box sx={{ zIndex: "9999999", position: "fixed", top: 0, left: 0, width: "100%", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", bgcolor: "rgba(0,0,0,.4)" }}>
                    <Box sx={{ minWidth: "600px", maxWidth: "600px", p: 4, bgcolor: "#fff", borderRadius: 5 }}>

                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Box>Update Location</Box>
                            <Box onClick={handleClose} sx={{ fontWeight: 900 }}>x</Box>
                        </Box>

                        <Box sx={{ mt: 2 }}>
                            <form>
                                <InputLabel htmlFor="name">Postal code</InputLabel>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    size='small'
                                // Add any other props you want to customize the TextField
                                />
                                <InputLabel htmlFor="distance">Distance</InputLabel>
                                <Select
                                    value={selectedOption}
                                    onChange={handleOptionChange}
                                    fullWidth
                                    variant="outlined"
                                    margin="normal"
                                    size='small'
                                    style={{ zIndex: 999 }}
                                >
                                    <MenuItem value="option1">25 miles</MenuItem>
                                    <MenuItem value="option1">50 miles</MenuItem>
                                    <MenuItem value="option1">100 miles</MenuItem>
                                    <MenuItem value="option2">250 miles</MenuItem>
                                    <MenuItem value="option3">500 miles</MenuItem>
                                </Select>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <Stack mt={3}>
                                            <Button variant="contained" color="success" sx={{ width: '100%' }}>Update Location</Button>

                                        </Stack>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Stack mt={1}>
                                            <Button variant="contained" sx={{ width: '100%', backgroundColor: 'red' }}>Clear filter</Button>

                                        </Stack>
                                    </Grid>
                                </Grid>


                            </form>
                        </Box>

                    </Box>
                </Box>
            } */}



            <Page title="Shop Online">
                <div key="balance">
                    <Card sx={{ minWidth: 1175, '@media screen and (max-width: 1400px)': { minWidth: '100%' } }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 18, fontWeight: 400 }} color="text.secondary" gutterBottom>
                                Shop Online
                            </Typography>
                            <Card sx={{ minWidth: 1145, '@media screen and (max-width: 1400px)': { minWidth: '100%' }, backgroundColor: '#F1F5F8' }}>
                                <CardContent>
                                    <Grid container >
                                        <Grid item xs={6}>
                                            <Typography sx={{ fontSize: 16, fontWeight: 300 }} color="text.secondary" gutterBottom>
                                                0 total orders found
                                            </Typography>
                                        </Grid>
                                        {/* <Grid item xs={6} sx={{ textAlign: 'right', alignItems: 'center' }}>

                                            <Typography sx={{ fontSize: 13, fontWeight: 300, alignItems: 'center' }} color="text.secondary" gutterBottom>
                                                <Link to="#" sx={{ alignItems: 'center' }} onClick={() => { setshowp(true) }}>
                                                    Filter Results by Postal Code <LocationOnIcon sx={{ size: 'small' }} />
                                                </Link>
                                                <Dialog open={open} onClose={handleClose} sx={Style} className="priyanka">

                                                    <DialogTitle>
                                                        Update Location<IconButton aria-label="close" onClick={handleClose} sx={{ position: 'absolute', right: 8, top: 8 }}>
                                                            <CloseIcon />
                                                        </IconButton>
                                                    </DialogTitle>
                                                    <DialogContent >
                                                        <form>
                                                            <InputLabel htmlFor="name">Postal code</InputLabel>
                                                            <TextField
                                                                variant="outlined"
                                                                fullWidth
                                                                margin="normal"
                                                                size='small'
                                                            // Add any other props you want to customize the TextField
                                                            />
                                                            <InputLabel htmlFor="distance">Distance</InputLabel>
                                                            <Select
                                                                value={selectedOption}
                                                                onChange={handleOptionChange}
                                                                fullWidth
                                                                variant="outlined"
                                                                margin="normal"
                                                                size='small'
                                                            >
                                                                <MenuItem value="option1">25 miles</MenuItem>
                                                                <MenuItem value="option1">50 miles</MenuItem>
                                                                <MenuItem value="option1">100 miles</MenuItem>
                                                                <MenuItem value="option2">250 miles</MenuItem>
                                                                <MenuItem value="option3">500 miles</MenuItem>
                                                            </Select>
                                                            <Grid container>
                                                                <Grid item xs={12}>
                                                                    <Stack mt={3}>
                                                                        <Button variant="contained" color="success" sx={{ width: '100%' }}>Update Location</Button>

                                                                    </Stack>
                                                                </Grid>
                                                                <Grid item xs={12}>
                                                                    <Stack mt={1}>
                                                                        <Button variant="contained" color="success" sx={{ width: '100%' }}>Clear filter</Button>

                                                                    </Stack>
                                                                </Grid>
                                                            </Grid>


                                                        </form>
                                                    </DialogContent>

                                                </Dialog>

                                            </Typography>

                                        </Grid> */}
                                    </Grid>
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
                        </CardContent>

                    </Card>
                </div>

            </Page>

        </>
    )
}

export default DoctorsReviews;