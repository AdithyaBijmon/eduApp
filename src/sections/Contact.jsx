import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';


function Contact() {
    return (
        <div style={{marginTop:'100px'}}>

            <h4 style={{ color: '#1eb2a6', fontWeight: 'bold', textAlign: 'center' }}>GET IN TOUCH</h4>
            <div className='col-md-1'></div>
            <div className='col-md-10 container'>
                <Box sx={{ flexGrow: 1, marginTop: '40px' }}>
                    <Grid container spacing={10}>
                        <Grid md={6} xs={12}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62865.55832720463!2d76.30948095113634!3d10.008813464705792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c8e94a07a07%3A0x49921cdfae82660!2sKakkanad%2C%20Kerala!5e0!3m2!1sen!2sin!4v1755437462424!5m2!1sen!2sin" width="360" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </Grid>
                        <Grid md={6} xs={12}>
                           

                            <FormControl fullWidth sx={{ mt: 1}} variant="standard">
                                <InputLabel htmlFor="standard-adornment-amount">Enter your name</InputLabel>
                                <Input
                                    id="standard-adornment-amount"
                               
                                />
                            </FormControl>
                             <FormControl fullWidth sx={{ mt: 5 }} variant="standard">
                                <InputLabel htmlFor="standard-adornment-amount">Enter your Email</InputLabel>
                                <Input
                                    id="standard-adornment-amount"
                               
                                />
                            </FormControl>
                             <FormControl fullWidth sx={{ mt: 5}} variant="standard">
                                <InputLabel htmlFor="standard-adornment-amount">Message</InputLabel>
                                <Input 
                                    multiline
                                    id="standard-adornment-amount"
                                    rows={6}
                               
                                />
                            </FormControl>

                              <Button className='mt-4' sx={{backgroundColor:'#1eb2a6'}} variant="contained">Send message</Button>

                           
                            


                        </Grid>
                    </Grid>

                </Box>
            </div>

            <div className="col-md-1"></div>

        </div>
    )
}

export default Contact