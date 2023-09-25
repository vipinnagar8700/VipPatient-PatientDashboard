import React, { useState, useEffect } from 'react';
import { Navigate, useParams } from 'react-router';
import Page from '@layout/Page';
import { useSnackbar } from 'notistack';
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import Card from '@mui/material/Card';
import Url from '../url/Allurl'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { ADDPatientFiles, AddSecurityGroup, DEeletPatientFiles, EDITPatientFiles, GetAllPatientFiles, GetBilling, GetBillingCancel, GetSinglePAtient, GettSecurityData, UpdateSecurity, deleteSecurity, editSecurityData } from '@components/Api/AllApi';
import { Grid, Stack, TextField, InputLabel, Box, Avatar, FormControlLabel, Checkbox } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';



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



const MyFiles = () => {
    const { enqueueSnackbar } = useSnackbar();
    const [Sec, setSec] = useState(false)
    const [selectedTab, setSelectedTab] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const smallScreen = window.matchMedia('(max-width: 1038.98px)').matches;
    const [PatientSData, setPatientSData] = useState([])
    const [count, setCount] = useState(0)

    const handleModalClose = () => {
        setOpenModal(false);
        setSelectedTab('');
    };

    window.addEventListener('resize', () => {
        if (smallScreen) {
            handleModalClose();
        }
    });

    let { p_id } = useParams()



    useEffect(() => {
        const fetchTemplateData = async () => {
            try {
                const data = await GetAllPatientFiles(p_id);
                console.log(data, "This Is all Billing Data!");
                setPatientSData(data.result || []);
            } catch (error) {
                console.error(error);
            }
        };

        fetchTemplateData();
    }, [count]);

    console.log(PatientSData, "PatientFiles")

    // alert(p_id)
    const [AS, setSA] = useState(false)

    const handleDownloadClick = (imageUrl) => {
        // Create an anchor element to trigger the download.
        const anchor = document.createElement('a');
        anchor.href = imageUrl;

        // Extract the filename from the full path.
        const filename = imageUrl.split('/').pop();
        anchor.download = filename; // Use the extracted filename as the download filename.

        anchor.click();
    };




    const handleClick = (imageUrl) => {
        window.open(imageUrl, '_blank');
    };

    const baseUrl = `${Url}/public/uploads/images/`;



    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
        },

        {
            name: 'Date Added',
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



                    <button style={{ width: '50px', backgroundColor: 'skyblue', height: '35px', borderRadius: 4, color: 'white', fontWeight: 600, marginLeft: 2 }} onClick={() => handleDownloadClick(row.img)} >

                        <Link to="#" >
                            <DownloadIcon />
                        </Link>

                    </button>
                </>
            ),
            button: true,
            minWidth: '200px',
        },
    ];

    const data = PatientSData && PatientSData.map(item => ({
        id: item?.id || '',
        name: item?.name || '',
        img: item?.file || '',
        created_at: item?.created_at || '',
    }));

    const tableData = {
        columns,
        data,
    };


    const CalnceData = () => {

    }
    const [open, setOpen] = useState(false);

    const [showpa, setshowpa] = useState(false)

    const handleOpen = () => {
        setOpen(true);
    };
    const handleCloses = () => {
        setshowpa(false);
    };


    const [openu, setOpenu] = useState(false);

    const [showpau, setshowpau] = useState(false)

    const handleOpenu = () => {
        setOpenu(true);
    };
    const handleClosesu = () => {
        setshowpau(false);
    };


    const [subject, setSubject] = useState('');

    const handleSubjectChange = (event) => {
        setSubject(event.target.value);
    };


    const [names, setName] = useState('');
    const [fileI, setFileI] = useState(null);
    const [isVisibleToPatient, setIsVisibleToPatient] = useState(false);

    const handleFileChange = (event) => {
        setFileI(event.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // const isPatientVisibleInt = isVisibleToPatient ? 1 : 0;

        ADDPatientFiles(p_id, names, fileI).then((response) => {
            console.log('API response:', response.messege);
            // alert(response.messege)
            enqueueSnackbar(response.messege, {
                variant: 'success',
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                },
            });
            handleCloses()
            setCount(count + 1)
            // Handle the API response here, such as displaying a success message or updating UI
        });
    };







    return (
        <>
            {
                showpa &&
                <Box sx={{ zIndex: "9999999", position: "fixed", top: 0, left: 0, width: "100%", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", bgcolor: "rgba(0,0,0,.4)" }}>
                    <Box sx={{ minWidth: "500px", maxWidth: "500px", p: 2, bgcolor: "#fff" }}>

                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Box>Add Files</Box>
                            <Box onClick={handleCloses} sx={{ fontWeight: 900 }}>x</Box>
                        </Box>

                        <Box sx={{ mt: 2 }}>
                            <form onSubmit={handleSubmit}>
                                <InputLabel htmlFor="name">File Name</InputLabel>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    size="small"
                                    value={names}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                                <InputLabel htmlFor="file">File</InputLabel>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    size="small"
                                    type="file"
                                    onChange={handleFileChange}
                                    required
                                />
                                

                                <Grid container>
                                    <Grid item xs={12}>
                                        <Stack mt={1}>
                                            <button
                                                type="submit"
                                                p={2}
                                                style={{
                                                    width: '150px',
                                                    backgroundColor: '#2BAA27',
                                                    height: '40px',
                                                    borderRadius: 4,
                                                    color: 'white',
                                                    fontWeight: 400,
                                                }}
                                                variant="contained"
                                                color="success"
                                                sx={{ width: '100%' }}
                                            >
                                                Save Changes
                                            </button>
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </form>

                        </Box>

                    </Box>
                </Box>
            }

            <Grid container>

                <Grid items xs={12}>

                    <Card sx={{ minWidth: 470, marginLeft: '0px', '@media screen and (max-width: 100%)': { minWidth: '100%' } }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 18, fontWeight: 400 }} color="text.secondary" gutterBottom>
                                My Files
                            </Typography>
                            <button style={{ backgroundColor: 'skyblue', height: 40, borderRadius: 8, width: '170px', color: 'white', marginBottom: 4 }} onClick={() => { setshowpa(true) }}>
                                <Link to="#">Add  Files</Link>
                            </button>
                            <Card sx={{ minWidth: 445, '@media screen and (max-width: 100%)': { minWidth: '100%' }, backgroundColor: '#F1F5F8' }}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 13, fontWeight: 300 }} color="text.secondary" gutterBottom>
                                        {PatientSData.length} total  Exiting Files found
                                    </Typography>
                                    <div className="Order Page">
                                        <DataTableExtensions {...tableData}>
                                            <DataTable noHeader defaultSortField="id" defaultSortAsc={false} pagination highlightOnHover />
                                        </DataTableExtensions>
                                    </div>
                                </CardContent>
                            </Card>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

        </>
    );
};





export default MyFiles