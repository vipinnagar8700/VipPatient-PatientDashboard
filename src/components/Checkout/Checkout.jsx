import ProviderDetails from '@components/ShopOnline/ProviderDetails'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Avatar, Box, Divider, Grid, InputLabel, Stack } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import DoctorMessenger from '@pages/DoctorMessenger';
import { CheckoutData, DeleteCheckoutData, OrderByPatient, ProfileApi, SingleProductProvider, getDeliveryData, getDiscountCoupon } from '@components/Api/AllApi';
import { useEffect, useState } from 'react';
// components
import { useSnackbar } from 'notistack';
import Page from '@layout/Page';
import ModalWindow from '@components/ModalWindow';
import Tab from 'react-bootstrap/Tab';
import Content from '@components/Reviews/Content';
import ReviewsRatingList from '@components/Reviews/List';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Badge from '@mui/material/Badge';
import Sidebar from '@layout/Sidebar';
import Panel from '@layout/Panel';

const Checkout = () => {

    const { enqueueSnackbar } = useSnackbar();

    const [singleProduct, setSingleProduct] = useState(false)
    const [chec, setChe] = useState([])
    const [selectedTab, setSelectedTab] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const smallScreen = window.matchMedia('(max-width: 1038.98px)').matches;
    const [count, setCount] = useState(0)
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


        let AllCheckoutData = CheckoutData();
        if (AllCheckoutData) {
            AllCheckoutData.then((data) => {
                console.log(data?.result, "All Checkout Data!")
                setChe(data?.result, "All Checkout Data!")
            })
        }


    }, [count])

    const handleDelete = (id) => {
        let DeleteData = DeleteCheckoutData(id)

        if (DeleteData) {
            DeleteData.then((result) => {
                // Handle the result if needed (e.g., show a success message)
                console.log(result);
                // alert("Data Successfully Deleted!")
                enqueueSnackbar("Data Successfully Deleted!", {
                    variant: 'success',
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right',
                    },
                });
                setCount(count + 1)
            })
                .catch((error) => {
                    // Handle errors (e.g., show an error message)
                    enqueueSnackbar(error,"error to Delete data!", {
                        variant: 'error',
                        anchorOrigin: {
                            vertical: 'top',
                            horizontal: 'right',
                        },
                    });;
                });
        }

    }

    const columns = [
        {
            name: 'Image',
            selector: (row) => (
                <img
                    style={{
                        width: '60px',
                        height: '40px',
                        borderRadius: 4, // Add a comma here
                        color: 'white',
                        fontWeight: 600
                    }}
                    src={`https://medical.studiomyraa.com/public/uploads/images/${row.img}`} // Corrected the placement of the src attributef the src attribute
                    alt="Image" // You should also include an alt attribute for accessibility
                    sx={{ fontWeight: 300 }}
                />
            ),
            sortable: true,
        },
        {
            name: 'Product Name',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Dosage',
            selector: row => row.thc_dosage,
            sortable: true,
        },
        {
            name: 'CBD Dosage',
            selector: row => row.cbd_dosage,
            sortable: true,
        },
        {
            name: 'Quantity',
            selector: row => row.quantity,
            sortable: true,
        },
        {
            name: 'Price',
            selector: row => (row.amount),
            sortable: true,
        },

        {
            name: 'Actions',
            sortable: true,
            cell: (row) => (
                <button style={{ width: '80px', backgroundColor: '#FD0C39', height: '40px', borderRadius: 4, color: 'white', fontWeight: 600 }} sx={{ fontWeight: 300 }} >
                    <Link to="#" onClick={e => handleDelete(row.id)}>
                        Delete
                    </Link>

                </button>
            ),
            button: true,
            minWidth: '200px',
        },
    ];



    const data = chec.map(item => ({
        id: item?.id || '',
        img: item?.product?.img || '',
        name: item?.product?.product_name || '',
        thc_dosage: item?.product?.thc_dosage || '',
        cbd_dosage: item?.product?.cbd_dosage || '',
        amount: item?.product?.amount || '',
        quantity: item?.quantity || '',
    }));


    const tableData = {
        columns,
        data,
    };



    let { p_id } = useParams()
    // alert(p_id)


    const [editProfile, setEditProfile] = useState(false);

    console.log(editProfile, "EditProfileData!");

    let { name, mname, lname, about, email, address, address2, city, dob, gender, id, img, phone, pincode, state } = editProfile;
    console.log(name, mname, lname, about, email, address, address2, city, dob, gender, id, img, phone, pincode, state, 'EEEEEEEEEEEEEEE')






    const [A, setA] = useState(false)
    const [AB, setAB] = useState(false)
    useEffect(() => {
        let SingleProductofSingleProvider = SingleProductProvider(p_id)
        if (SingleProductofSingleProvider) {
            SingleProductofSingleProvider.then((data) => {
                setSingleProduct(data?.results)

            })
        }

        let PatientData = ProfileApi()
        if (PatientData) {
            PatientData.then((data) => {
                setEditProfile(data?.results)
                console.log(data?.results, "lkjhgfd")
            })
        }

        DiscountApiData()
        DeliveryApiData()
    }, [])




    const DiscountApiData = () => {
        let DiscountData = getDiscountCoupon()
        if (DiscountData) {
            DiscountData.then((data) => {
                console.log(data?.result, "Discount Data!")
                setA(data?.result)
            })
        }
    }

    const DeliveryApiData = () => {
        let DeliveryData = getDeliveryData()
        if (DeliveryData) {
            DeliveryData.then((data) => {
                console.log(data?.result, "DeliveryData Data!")
                setAB(data)
            })
        }
    }

    const [freeDelivery, setFreeDelivery] = useState(false);

    const handleCheckboxChange = (event) => {
        setFreeDelivery(event.target.checked);
    };

    const [rateDelivery, setrateDelivery] = useState(false);

    const handleCheckboxChangerate = (event) => {
        setrateDelivery(event.target.checked);
    };





    const [payOnline, setpayOnline] = useState(false);

    const handleCheckboxChangepay = (event) => {
        setpayOnline(event.target.checked);
    };

    const [Cod, setCod] = useState(false);

    const handleCheckboxChangeCod = (event) => {
        setCod(event.target.checked);
    };
    const [StockPickup, setStockPickup] = useState(false);

    const handleCheckboxChangeStockPickup = (event) => {
        setStockPickup(event.target.checked);
    };


    console.log(singleProduct, "SSSSSSSSSSSSSSSSSSSS")

    const CompanyID = chec?.map(item => item?.product?.company_id);
    console.log(CompanyID, "KKKKKKKKKKKKKKKKKKK")
    const initialProductIds = chec?.map(item => item?.product_id);
    console.log(initialProductIds, "KKKKKKKKKKKKKKKKKKK")
    const TotalAmount = chec?.map(item => item?.product?.amount);
    console.log(TotalAmount, "TTTTTTTTTTTTTTTTTTTTTTTTTTTTT")
    const total = TotalAmount.reduce((acc, currentValue) => acc + parseFloat(currentValue), 0);
    console.log(total, "OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOo");


    const totalAmounts = chec?.map(item => {
        const product = item.product;
        const quantity = item.quantity;
        const amount = parseFloat(product.amount);

        return quantity * amount;
    });

    console.log(totalAmounts, "Total Amounts for Each Product");

    const totala = totalAmounts.reduce((acc, currentValue) => acc + currentValue, 0);
    console.log(totala, "Total Amount for All Products");

    const DisAmount = AB?.result?.amount;

    console.log(DisAmount, "GGGGGGGGGGGGGGGGGGGGGGGGGGGGGg")


    const CartID = chec?.id
    console.log(CartID, "JJJJJJJJJJJJJJJJJJjj")
    const TotalAoountAferDElivery = totala - DisAmount;
    console.log(TotalAoountAferDElivery, "PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP")

    const handleUpdate = (e) => {
        e.preventDefault();

        try {
            const result = OrderByPatient(id, p_id, name, lname, address, address2, city, state, pincode, total, freeDelivery, rateDelivery, payOnline, Cod, StockPickup
            );

            result.then((data) => {
                console.log(data, "thtrtrer;ojgsrdbehx");
                alert(data?.messege);
                setCount(count + 1)

            })
            console.log(result, "Data Updated Successfully");
        } catch (error) {
            console.error("Error occurred while updating data:", error);
        }
    };



    const [open, setOpen] = useState(false);

    const [show, setshow] = useState(false)

    const handleClose = () => {
        setshow(false);
    };


    return (
        <div>
            {
                show &&
                <Box sx={{ zIndex: "9999999", position: "fixed", top: 0, left: 0, width: "100%", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", bgcolor: "rgba(0,0,0,.4)" }}>
                    <Box sx={{ minWidth: "500px", maxWidth: "500px", p: 2, bgcolor: "#fff" }}>

                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Box>Add Coupon</Box>
                            <Box onClick={handleClose} sx={{ fontWeight: 900 }}>x</Box>
                        </Box>
                        <Typography sx={{ mt: 1 }}>Public Coupon Codes:</Typography>
                        {
                            A && A?.map((data, index) => {
                                return (
                                    <Typography mt={0.50} sx={{ fontSize: 14 }} key={index}>{data.code}($ {data.discount}.00)-Description:-{data.description}</Typography>
                                )
                            })
                        }
                        <Box sx={{ mt: 0.2 }}>
                            <form>
                                <InputLabel htmlFor="name">Coupon code</InputLabel>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    size='small'
                                // Add any other props you want to customize the TextField
                                />
                                <Typography sx={{ fontSize: 10 }}>If your coupon code is valid, it will be applied to your order after it is submitted.</Typography>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <Stack mt={1}>
                                            <button p={2} style={{ width: '150px', backgroundColor: '#2BAA27', height: '40px', borderRadius: 4, color: 'white', fontWeight: 400 }} variant="contained" color="success" sx={{ width: '100%' }}>Apply Coupon </button>
                                        </Stack>
                                    </Grid>

                                </Grid>


                                {/* Add more TextField components for other input fields */}
                            </form>
                        </Box>

                    </Box>
                </Box>
            }
            <Sidebar />
            <Panel />
            <Box mt={2}>
                <ProviderDetails />
            </Box>
            <Box mt={3}>
                <Card sx={{ maxWidth: 1145 }}>
                    <Card sx={{ maxWidth: 1100, maxHeight: 40, margin: 3, padding: 1 }} >
                        <div role="presentation">
                            <Breadcrumbs aria-label="breadcrumb">
                                <Link underline="hover" color="inherit" to="/ShopOnline">
                                    Shop online
                                </Link>
                                <Link
                                    underline="hover"
                                    color="inherit"
                                // to={`/patients/dashboard/shop/1/products/${singleProduct.user_id}`}
                                >
                                    Demo Provider
                                </Link>
                                <Link
                                    underline="hover"
                                    color="text.primary"
                                    to="#"
                                    aria-current="page"
                                >
                                    {/* {singleProduct.product_name} */}
                                </Link>
                            </Breadcrumbs>
                        </div>
                    </Card>
                    <CardContent mb={2}>

                        <Grid container>
                            <Grid item xs={6}>
                                <Typography sx={{ fontSize: 18, fontWeight: 400 }} gutterBottom>
                                    My Shopping Cart
                                </Typography>
                            </Grid>

                        </Grid>


                        <Card sx={{ minWidth: 1145, '@media screen and (max-width: 1400px)': { minWidth: '100%' }, backgroundColor: '#F1F5F8' }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 16, fontWeight: 300 }} color="text.secondary" gutterBottom>
                                    {chec.length} total Product Added
                                </Typography>
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
            </Box>
            <Box mt={2}>
                <Grid container >
                    <Grid items xs={12} md={6} p={1}>
                        <Card sx={{ backgroundColor: '#fff' }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 16, fontWeight: 600 }} color="text.secondary" gutterBottom>
                                    Delivery Options
                                </Typography>
                                <Checkbox style={{ marginRight: 3 }} checked={freeDelivery}
                                    onChange={handleCheckboxChange} />{AB?.result?.name || ''}
                                <Checkbox style={{ marginRight: 3 }} checked={StockPickup}
                                    onChange={handleCheckboxChangeStockPickup} />In Store Pickup
                                <Checkbox style={{ marginRight: 3 }} checked={rateDelivery}
                                    onChange={handleCheckboxChangerate} />flate rate delivery<span style={{ color: 'green', marginLeft: 4 }}> $ {AB?.result?.amount}.00</span>
                                <Typography sx={{ fontSize: 16, fontWeight: 600 }}>
                                    Additional Delivery Information
                                </Typography>
                                <InputLabel>First name</InputLabel>
                                <TextField placeholder='First name' size='small' fullWidth value={name} onChange={(e) => {
                                    setEditProfile({
                                        ...editProfile, name: e.target.value
                                    })
                                }} />
                                <InputLabel >last name</InputLabel>
                                <TextField placeholder='last name' size='small' fullWidth value={lname} onChange={(e) => {
                                    setEditProfile({
                                        ...editProfile, lname: e.target.value
                                    })
                                }} />
                                <InputLabel>Address1</InputLabel>
                                <TextField placeholder=' Address1' size='small' fullWidth value={address} onChange={(e) => {
                                    setEditProfile({
                                        ...editProfile, address: e.target.value
                                    })
                                }} />
                                <InputLabel>Address2 </InputLabel>
                                <TextField placeholder=' Address2' size='small' fullWidth value={address2} onChange={(e) => {
                                    setEditProfile({
                                        ...editProfile, address2: e.target.value
                                    })
                                }} />
                                <InputLabel>City</InputLabel>
                                <TextField placeholder='City ' size='small' fullWidth value={city} onChange={(e) => {
                                    setEditProfile({
                                        ...editProfile, city: e.target.value
                                    })
                                }} />
                               <InputLabel id="demo-simple-select-label">State</InputLabel>
                        <select placeholder={editProfile.state} style={{ width:'100%', padding: 10, fontSize: 15, borderRadius: 4 }}
                            value={editProfile.state}  // Set the value to the state value from editProfile
                            onChange={(e) => {
                                setEditProfile({
                                    ...editProfile,
                                    state: e.target.value
                                });
                            }}
                            size='small'
                            name="state"
                            class="form-control"
                            InputLabelProps={{ style: { color: 'blue' } }} >
                            <option value="AL">{editProfile.state}</option>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="DC">District Of Columbia</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="PR">Puerto Rico</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VI">Virgin Islands</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>

                        </select>
                                <InputLabel>Postal code</InputLabel>
                                <TextField placeholder='Postal ' size='small' fullWidth value={pincode} onChange={(e) => {
                                    setEditProfile({
                                        ...editProfile, pincode: e.target.value
                                    })
                                }} />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid items xs={12} md={6} p={1}>
                        <Card sx={{ backgroundColor: '#fff' }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 16, fontWeight: 600 }} color="text.secondary" gutterBottom>
                                    Order Details
                                </Typography>
                                <Typography color="success" mt={1.5}>

                                    Sub-Total:<span style={{ color: 'green', marginLeft: 42 }}>${totala}.00</span>
                                </Typography>
                                <Divider />
                                <Typography mt={1.5}>

                                    Delivery Costs:<span style={{ color: 'green', marginLeft: 42 }}>${DisAmount}.00</span>
                                </Typography>
                                <Divider />
                                <Typography mt={1.5}>

                                    Discounts: <Link onClick={() => { setshow(true) }} sx={{ marginLeft: 50, TextDecoder: 'underline' }}> Have a Coupon?</Link>
                                </Typography>
                                <Divider />
                                <Typography mt={1.5} color="success">

                                    Total Due:<span style={{ color: 'green', marginLeft: 42 }}>${TotalAoountAferDElivery}.00</span>
                                </Typography>
                                <Typography mt={3} sx={{ fontSize: 15, fontWeight: 600 }}>
                                    Payment Information
                                </Typography>
                                <Typography mt={1.5} sx={{ fontSize: 15, fontWeight: 600 }}>
                                    <Checkbox checked={payOnline}
                                        onChange={handleCheckboxChangepay} /> Pay Online
                                </Typography>
                                <Typography mt={1.5} sx={{ fontSize: 14 }}>
                                    Pay quickly and easily using your online account. You currently have $0.00 in your account.
                                    If you do not have enough funds to complete this order, you will be taken to a page where you can add funds to your account using a credit or debit card, or bank account transfer.
                                </Typography>
                                <Typography mt={1.5} sx={{ fontSize: 15, fontWeight: 600 }}>
                                    <Checkbox checked={Cod}
                                        onChange={handleCheckboxChangeCod} /> Pay With Cash
                                </Typography>
                                <Typography mt={1.5}>
                                    Pay in person with cash. You will not receive rewards points for orders placed with cash.
                                </Typography>
                                <button style={{ marginTop: 14, borderRadius: 8, backgroundColor: 'green', color: 'white', padding: 10 }} onClick={handleUpdate}>Submit Order</button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

            </Box>
        </div>
    )
}

export default Checkout