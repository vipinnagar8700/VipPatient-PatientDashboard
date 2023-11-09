import * as React from 'react';
import { useSnackbar } from 'notistack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Grid, Stack } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import DoctorMessenger from '@pages/DoctorMessenger';
import { Addtocart, SingleProductProvider } from '@components/Api/AllApi';
import { useEffect, useState } from 'react';
import ProviderDetails from './ProviderDetails';
import Sidebar from '@layout/Sidebar';
import Panel from '@layout/Panel';
import Url from 'url/Allurl';




const SingleProductpage = () => {

    const [singleProduct, setSingleProduct] = useState(false)



    const { enqueueSnackbar } = useSnackbar();
    let { p_id } = useParams()
    // alert(p_id)


    useEffect(() => {
        let SingleProductofSingleProvider = SingleProductProvider(p_id)
        if (SingleProductofSingleProvider) {
            SingleProductofSingleProvider.then((data) => {
                setSingleProduct(data.results)

            })
        }
    }, [])


    console.log(singleProduct, "SSSSSSSSSSSSSSSSSSSS")




    const DataAdd = async (productId) => {
        console.log(productId, "MMMMMMMMMMMMMMMMMMMMMMMMMMMm")
        try {
            const result = await Addtocart(productId);
            console.log(result);
            //   alert(result);
            enqueueSnackbar(result, {
                variant: 'success',
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                },
            });
        } catch (error) {
            enqueueSnackbar(error, "Error to add product on cart!", {
                variant: 'error',
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                },
            });
        }
    };

    return (
        <>
            <Sidebar />
            <Panel />
            <Box>

                <Box mt={3}>

                    <ProviderDetails />
                </Box>
                <Box mt={3}>
                    <Card sx={{ maxWidth: 1145 }}>
                        <Card sx={{ maxWidth: 1100, maxHeight: 40, margin: 3, padding: 1 }} >
                            <div role="presentation">
                                <Breadcrumbs aria-label="breadcrumb">
                                    <Link underline="hover" color="inherit" to="/doctor_reviews">
                                        Shop online
                                    </Link>
                                    <Link
                                        underline="hover"
                                        color="inherit"
                                        to={`/patients/dashboard/shop/1/products/${singleProduct.user_id}`}
                                    >
                                        Demo Provider
                                    </Link>
                                    <Link
                                        underline="hover"
                                        color="text.primary"
                                        to="#"
                                        aria-current="page"
                                    >
                                        {singleProduct.product_name}
                                    </Link>
                                </Breadcrumbs>
                            </div>
                        </Card>
                        <CardContent mb={2}>
                            <Grid container>
                                <Grid item xs={6}>
                                    <Typography sx={{ fontSize: 16, fontWeight: 600 }} >
                                        {singleProduct.product_name}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Stack mt={2} direction='row' gap={3}>
                                <Card sx={{ maxWidth: 390 }}>
                                    <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        height="440"
                                        image={`${Url}/public/uploads/images/${singleProduct.img}`}
                                        // image="https://app.reliefehr.com/uploads/products/5_9da5b658ab7d411f7b5896ac8c4a98101110278c.jpg"
                                    />

                                </Card>
                                <Card sx={{ maxWidth: 945, minWidth: 670 }}>
                                    <CardContent mb={2}>
                                        <Typography sx={{ fontSize: 16, fontWeight: 600 }} >
                                            Product Description
                                        </Typography>
                                        {singleProduct.description}
                                        <br />
                                        <Typography sx={{ fontSize: 14, fontWeight: 600 }} >
                                            Purchase Options
                                        </Typography>
                                    </CardContent>
                                    <Card sx={{ maxWidth: 745 }}>
                                        <CardContent mb={2}>
                                            <Typography sx={{ fontSize: 16, fontWeight: 600, display: 'flex' }} >
                                                Price:<Typography sx={{ color: 'success' }}>${singleProduct.sale_amount}.00</Typography>
                                            </Typography>
                                            <button style={{ width: '100px', backgroundColor: '#2BAA27', height: '29px', borderRadius: 4, color: 'white', fontWeight: 300 }} onClick={() => DataAdd(singleProduct?.id)}>Add To Cart</button>
                                        </CardContent>
                                        {/* <DoctorMessenger /> */}
                                    </Card>
                                </Card>


                            </Stack>

                        </CardContent>

                    </Card>
                </Box>
            </Box >

        </>
    )
}

export default SingleProductpage