// styled components
import { Input } from '@ui/Field';
import { Container, Grid, Button, TextField, InputLabel, Select, option, Stack, Box, } from '@mui/material';
// components
import DateInput from '@components/MaskedInputs/Date';
import Phone from '@components/MaskedInputs/Phone';
import { useSnackbar } from 'notistack';
// utils
import PropTypes from 'prop-types';
// hooks
import { useState, useEffect } from 'react';
import { ProfileApi, UpdateProfileData } from '@components/Api/AllApi';
import Url from 'url/Allurl';



const Form = ({ type }) => {
    const { enqueueSnackbar } = useSnackbar();

    const [editProfile, setEditProfile] = useState(false);

    const [count, setCount] = useState(0)


    console.log(editProfile, "EditProfileData!");

    let { name, mname, lname, about, email, address, address2, city, dob, gender, id, img, phone, pincode, state } = editProfile;
    console.log(name, mname, lname, about, email, address, address2, city, dob, gender, id, img, phone, pincode, state, 'EEEEEEEEEEEEEEE')



    useEffect(() => {
        ProfileApi().then((res) => {
            setEditProfile(res.results)
            console.log(res.results, "This Is profileDatas")
        })

    }, [count])


    const handleUpdate = (e) => {
        e.preventDefault();

        try {
            const result = UpdateProfileData(name, mname, lname, email, address, address2, city, dob, phone, pincode, state, img
            );

            result.then((data) => {
                console.log(data, "thtrtrer;ojgsrdbehx");
                // alert(data?.message);
                enqueueSnackbar(data?.message, {
                    variant: 'success',
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right',
                    },
                });
                setCount(count + 1)
                window.location.reload()

            })
            console.log(result, "Data Updated Successfully");
        } catch (error) {
            enqueueSnackbar(error, "Something went wrong!", {
                variant: 'error',
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                },
            });
        }
    };



    return (
        <div className="wrapper">

            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12}  md={6}>
                        <InputLabel htmlFor={`${type}ProfileBirthday`}>First Name</InputLabel>
                        <TextField placeholder="First Name" size="small" value={name} onChange={(e) => {
                            setEditProfile({
                                ...editProfile, name: e.target.value
                            })
                        }} fullWidth />
                    </Grid>
                    <Grid item xs={12}  md={6}>
                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Middle Name</InputLabel>
                        <TextField id={`${type}ProfileMiddleName`} title="Middle Name" size="small" value={mname} onChange={(e) => {
                            setEditProfile({
                                ...editProfile, mname: e.target.value
                            })
                        }} placeholder="Middle Name" fullWidth />
                    </Grid>
                    <Grid item xs={12}  md={6}>
                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Last Name</InputLabel>
                        <TextField id={`${type}ProfileLastName`} title="Last Name" size="small" value={lname} onChange={(e) => {
                            setEditProfile({
                                ...editProfile, lname: e.target.value
                            })
                        }} placeholder="Last Name" fullWidth />
                    </Grid>
                    <Grid item xs={12}  md={6}>
                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Email</InputLabel>
                        <TextField id={`${type}ProfileLastName`} title="Email" size="small" value={email} onChange={(e) => {
                            setEditProfile({
                                ...editProfile, email: e.target.value
                            })
                        }} placeholder="Email" fullWidth />
                    </Grid>
                    <Grid item xs={12}  md={6}>

                        <InputLabel id="demo-simple-select-label">State</InputLabel>
                        <select placeholder={editProfile.state} style={{ maxWidth: '100%', padding: 10, fontSize: 15, borderRadius: 4, minWidth: '100%' }}
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
                        {/* <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="State"
                            fullWidth placeholder={editProfile.state}
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
                            
                        </Select> */}

                    </Grid>
                    <Grid item xs={12}  md={6}>
                        <InputLabel htmlFor={`${type}ProfileBirthday`}>City</InputLabel>
                        <TextField title="city" size="small" value={city} onChange={(e) => {
                            setEditProfile({
                                ...editProfile, city: e.target.value
                            })
                        }} placeholder="City" fullWidth />

                    </Grid>
                    <Grid item xs={12}  md={6}>
                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Pincode</InputLabel>
                        <TextField id={`${type}ProfileLastName`} title="Pincode" size="small" value={pincode} onChange={(e) => {
                            setEditProfile({
                                ...editProfile, pincode: e.target.value
                            })
                        }} placeholder="Pincode" fullWidth />
                    </Grid>
                    <Grid item xs={12}  md={6}>
                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Address</InputLabel>
                        <TextField id={`${type}ProfileStreet`} title="Street" size="small" onChange={(e) => {
                            setEditProfile({
                                ...editProfile, address: e.target.value
                            })
                        }} placeholder="Street" value={address} fullWidth />
                    </Grid>
                    <Grid item xs={12}  md={6}>
                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Address1</InputLabel>
                        <TextField id={`${type}ProfileAddress1`} title="Address Line 1" size="small" onChange={(e) => {
                            setEditProfile({
                                ...editProfile, address2: e.target.value
                            })
                        }} placeholder="Address Line 1" value={address2} fullWidth />
                    </Grid>
                    <Grid item xs={12}  md={6}>
                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Address2</InputLabel>
                        <TextField id={`${type}ProfileAddress2`} title="Address Line 2" value={address2} onChange={(e) => {
                            setEditProfile({
                                ...editProfile, address2: e.target.value
                            })
                        }} size="small" placeholder="Address Line 2" fullWidth />
                    </Grid>
                    <Grid item xs={12}  md={6}>
                        <InputLabel htmlFor={`${type}ProfileBirthday`}>Birthday</InputLabel>
                        <TextField id={`${type}ProfileBirthday`} title="Birthday" type="date" size="small" placeholder="Birthday" value={dob} onChange={(e) => {
                            setEditProfile({
                                ...editProfile, dob: e.target.value
                            })
                        }} fullWidth customInput={<Input as={DateInput} id={`${type}ProfileBirthday`} />} />
                    </Grid>
                    {type === 'patient' && (
                        <>

                            <Grid item xs={12}  md={6}>
                                <InputLabel htmlFor={`${type}ProfileBirthday`}>Phone</InputLabel>
                                <TextField id="patientProfilePhone" title="Phone" onChange={(e) => {
                                    setEditProfile({
                                        ...editProfile, phone: e.target.value
                                    })
                                }} size="small" placeholder="Phone" value={phone} fullWidth customInput={<Phone id="patientProfilePhone" placeholder="+1(000)-000-00-00" />} />
                            </Grid>
                        </>
                    )}
                    <Grid item xs={12}  md={6}>
                        <InputLabel htmlFor="clinicLogo">My Avatar</InputLabel>

                        <Stack direction='row'>
                            <Box sx={{ border: '1px solid #C4C4C4', borderRadius: 2, padding: 1 }}>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => setEditProfile({ ...editProfile, img: e.target.files[0] })}
                                />
                            </Box>

                            <Box sx={{ marginLeft: 20, width: 40, height: 40 }}>
                                {editProfile.img && (
                                    <img
                                        style={{ borderRadius: 5, width: '100%', height: '100%', objectFit: 'cover' }}
                                        src={`${Url}/public/uploads/images/${editProfile.img}`}
                                        alt="Clinic Logo"
                                    />
                                )}
                            </Box>
                        </Stack>


                    </Grid>
                    <Grid item xs={12}  md={6}  sx={{marginTop:3}}  >
                        <button style={{ width: '150px', backgroundColor: '#2BAA27', height: '40px', borderRadius: 4, color: 'white', fontWeight: 600 }} onClick={handleUpdate} type="submit" bgcolor="success" variant="contained">Save Changes</button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

Form.propTypes = {
    type: PropTypes.oneOf(['patient']).isRequired
}

export default Form;