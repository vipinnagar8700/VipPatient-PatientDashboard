// styled components
import { Menu, UserWrapper } from '../style';
// components
import Avatar from '@ui/Avatar';
import Url from '../../../url/Allurl'
// utils
import ClickAwayListener from '@mui/base/ClickAwayListener';
import { useState } from 'react';

// assets
import doc1jpg from '@assets/avatars/doc1.jpg';
import doc1webp from '@assets/avatars/doc1.jpg?as=webp';
import { LogoutProfile, ProfileApi } from '@components/Api/AllApi';
import { useEffect } from 'react';
import { Link, redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const CurrentUser = () => {
    const navigate = useNavigate();
    const [ProfileData, setProfileData] = useState(false);
    const [open, setOpen] = useState(false);
    const handleClickAway = () => setOpen(false);
    const handleClick = () => setOpen(!open);

    const src = {
        jpg: doc1jpg,
        webp: doc1webp
    }


    useEffect(() => {
        ProfileApi().then((res) => {
            setProfileData(res.results)
            console.log(res.results, "This Is profileData")
        })
    }, [])


    const Logout = async () => {
        const response = await LogoutProfile();
        console.log(response);

        if (response && response.message === "Successfully logged out") {
            alert("Successfully Logout  !");

            // Clear local storage
            localStorage.removeItem("user");

            // Clear cookies
            document.cookie.split(';').forEach(function (cookie) {
                var name = cookie.split('=')[0].trim();
                document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
            });

            // Navigate to the desired location
            navigate('/');
        } else {
            alert("Logout failed. Please try again.");
        }

    };

    const dynamicImagePath = `${Url}/public/uploads/images/${ProfileData?.img}`;
    const staticImagePath = 'https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=740&t=st=1697180675~exp=1697181275~hmac=1d5eaf2193838f106950749b72bcc6f78a053ef28c11fb941d226d3b2ad8662b';
    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <UserWrapper>
                <img
                    src={ProfileData?.img ? dynamicImagePath : staticImagePath}
                    style={{ height: '25px', width: '25px' }}
                    alt="avatar"
                />
                <div className="info">
                    <span className="h3">{ProfileData?.name} {ProfileData?.lname}</span>
                    <span className="position">{ProfileData?.address}</span>
                    <Menu className={open ? 'visible' : ''}>
                        <button>
                            <Link to="/settings"> <i className="icon icon-circle-user" /> Change user</Link>
                        </button>
                        <button>
                            <Link to="/settings/ChangePassword"> <i className="icon icon-circle-user" /> Change Password</Link>
                        </button>
                        <button>
                            <Link to="/Checkout"> <i className="icon icon-circle-user" /> Checkout</Link>
                        </button>
                        <button>
                            <i className="icon icon-logout" onClick={Logout} /> Logout
                        </button>
                    </Menu>
                </div>
                <button className="trigger" onClick={handleClick} aria-label="Show menu">
                    <i className="icon icon-chevron-down" />
                </button>
            </UserWrapper>
        </ClickAwayListener>
    )
}

export default CurrentUser;