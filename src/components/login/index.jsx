import React, { useEffect } from 'react';
import {
  Container,
  Card,
  Grid,
  Box,
  Typography,
  TextField,
  Checkbox,
  Button,
  Link,
  Divider,
} from '@mui/material';
import Doctor from '../../assets/avatars/happy-doctor-holding-clipboard-with-patients.jpg'
import { Facebook, Twitter, LinkedIn } from '@mui/icons-material';
import { LoginApi } from '@components/Api/AllApi';
import { useState } from 'react';
import Cookies from 'js-cookie'; // Import the js-cookie library
import { useNavigate } from 'react-router';
import Url from 'url/Allurl';


const Login = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Add your login logic here, such as handling form submission, authentication, etc.
  const handleLogin = async (e) => {
    // Assuming you've validated the email and password fields, call the API here
    e.preventDefault();
    try {
      // Call the API here using the updated fetch method
      const res = await fetch(`${Url}/api/login_action`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          email_phone: email, // Use the email state variable here
          password: password // Use the password state variable here
        })
      });
      // Parse the API response as JSON
      const data = await res.json();
      console.log(data, "This Is Login Data")

      // Assuming the API response includes information about successful login
      if (data && data.token) {
        const userRole = data.user.role; // Assuming the API response includes the user's role

        // Check the user's role and navigate accordingly
        if (userRole === "patient") {
          // Save the token in local storage
          localStorage.setItem("user", JSON.stringify(data.user));
          // Optionally, you can also set the token in a state variable if needed
          // setToken(data.token);
          Cookies.set("user", data.token, { expires: 7 });
          alert("Successfully Logged In as a Patient!");
          navigate('/PatientDashboard')
          setTimeout(() => {
            window.location.reload();
          }, 500);
          // setIsLoggedIn(true); // Update the isLoggedIn state in the parent component
        } else {
          alert("You do not have the required role to log in!");
        }
      } else {
        alert("Login failed. Please check your credentials.");
      }
    } catch (error) {
      // Handle API call errors or authentication failures here
      console.log('error', error);
    }
  };



  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  return (
    <Container maxWidth="lg" sx={{ px: 1, pxMd: 5, pxLg: 1, pxXl: 5, py: 10, mx: 'auto' }}>
      <Card sx={{ border: 0 }} elevation={4}>
        <Grid container alignItems="center">
          <Grid item lg={6}>
            <Box >

              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <img src={Doctor} alt="Main Image" className="image" />
              </Box>
            </Box>
          </Grid>
          <Grid item lg={6}>
            <Card sx={{ border: 0, px: 4, py: 10 }}>
              <Grid container spacing={4} alignItems="center">
                <Grid item xs={12}>
                  <Typography sx={{ fontSize: 17 }}>
                    Patient Portal Login
                  </Typography>
                  <Typography sx={{ fontSize: 14 }}>
                    Please use the form below to access your account!
                  </Typography>

                </Grid>

                <Grid item xs={12}>
                  <TextField fullWidth label="Username" placeholder="Enter a valid email address" value={email}
                    onChange={handleEmailChange} />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth type="Password" label="Password" placeholder="Enter password" value={password}
                    onChange={handlePasswordChange} />
                </Grid>

                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                  <button style={{ width: '150px', backgroundColor: 'red', height: '40px', borderRadius: 4, color: 'white', fontWeight: 600 }} onClick={handleLogin}>
                    Login
                  </button>
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Typography variant="body2" fontWeight="bold">
                    <Link to="/forgot-password" > Forgot password? </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>

      </Card>
    </Container>
    // <div className="login-container">
    //   {/* Add your login form JSX here */}
    //   <form>
    //     {/* Login form inputs */}
    //     <button type="submit" onClick={handleLogin}>
    //       Login
    //     </button>
    //   </form>
    // </div>
  );
};

export default Login;
