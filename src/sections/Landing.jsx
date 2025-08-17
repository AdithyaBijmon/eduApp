import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { IoMenu } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import '../index.css'




const pages = ['Home', 'Courses', 'About us', 'Contact'];
function Landing() {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
 

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (

        <div id='landingImage' style={{ backgroundImage: 'url(https://cdn.prod.website-files.com/5f46c318c843828732a6f8e2/6502da06dd3676099cf24de0_Top-educational-software.webp)', width: '100%', height: '90vh', backgroundPosition: 'center', backgroundSize: 'cover' }}>
            <div className='landingContent' >

                <div className='land-bg'>
                    <AppBar position="static" className='bg-transparent' style={{ fontFamily: '"Newsreader", serif' }} elevation={0}>
                        <Container maxWidth="xl">
                            <Toolbar disableGutters>


                                <Typography
                                    variant="h5"
                                    noWrap
                                    component="a"
                                    href="#app-bar-with-responsive-menu"
                                    sx={{
                                        mr: 5,
                                        display: { xs: 'none', md: 'flex' },
                                        fontFamily: '"Newsreader", serif',
                                        color: 'inherit',
                                        textDecoration: 'none',
                                    }}
                                >
                                    eduApp
                                </Typography>

                                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                                    <IconButton
                                        size="large"
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        onClick={handleOpenNavMenu}
                                        color="inherit"
                                    >
                                        <IoMenu />
                                    </IconButton>
                                    <Menu
                                        id="menu-appbar"
                                        anchorEl={anchorElNav}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'left',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'left',
                                        }}
                                        open={Boolean(anchorElNav)}
                                        onClose={handleCloseNavMenu}
                                        sx={{ display: { xs: 'block', md: 'none' } }}
                                    >
                                        {pages.map((page) => (
                                            <MenuItem key={page} onClick={handleCloseNavMenu}>
                                                <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </Box>


                                <Typography
                                    variant="h5"
                                    noWrap
                                    component="a"
                                    href="#app-bar-with-responsive-menu"
                                    sx={{
                                        mr: 2,
                                        display: { xs: 'flex', md: 'none' },
                                        flexGrow: 1,

                                        color: 'inherit',
                                        textDecoration: 'none',
                                    }}
                                >
                                    eduApp
                                </Typography>
                                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                    {pages.map((page) => (
                                        <Button
                                            key={page}
                                            onClick={handleCloseNavMenu}
                                            sx={{ my: 2, color: 'white', display: 'block' }}
                                        >
                                            {page}
                                        </Button>
                                    ))}
                                </Box>
                                <Box sx={{ flexGrow: 0 }}>

                                    <Button className='text-light fs-4' ><FaInstagram /></Button>
                                    <Button className='text-light fs-4'><FaFacebook /></Button>
                                    <Button className='text-light fs-4'><FaTwitter /></Button>
                                </Box>
                            </Toolbar>
                        </Container>
                    </AppBar>


                    <div className='content text-light mt-5 ms-md-0 ms-3'>
                        <h5 style={{color:'#1eb2a6',fontWeight:'bold'}}>WELCOME TO EDUAPP</h5>
                        <h1 >Best Online <br />Education Expertise</h1>
                        <Button variant="contained" color="inherit" sx={{color:'#1eb2a6',padding:'15px'}}>
                            Get started know
                        </Button>
                        <Button variant="contained" color="inherit" sx={{color:'#1eb2a6',marginLeft:'20px',padding:'15px'}}>
                            View Courses
                        </Button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Landing