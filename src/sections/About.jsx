import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import { IoBookSharp } from "react-icons/io5";
import { GrCertificate } from "react-icons/gr";
import { GrUserExpert } from "react-icons/gr";




function About() {
    return (
        <>

            <div className='container my-5'>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container >
                     <div className='col-md-6'>
                            <Grid xs={12} sm={6} md={6}>
                                <h5 style={{ color: '#1eb2a6', fontWeight: 'bold' }}>LEARN ANYTHING</h5>
                                <h1>Benefits About Online <br /> Learning Expertise</h1>
                                <Paper  sx={{ minWidth: 275 }} className='shadow'>
                                    <Card variant="outlined" className='d-flex p-3 about-content' >
                                        <IoBookSharp className='fs-2 me-3' style={{color:'#1eb2a6'}}/>
                                       <div> 
                                        <h5>ONLINE COURSES</h5>
                                        <p>"Learn new skills and transform your career, one course at a time."</p>
                                       </div>
                                    </Card>
                                </Paper>
                                 <Paper sx={{ minWidth: 275,marginTop:'10px' }} className='shadow '>
                                    <Card variant="outlined" className='d-flex p-3 about-content' >
                                        <GrCertificate className='fs-2 me-3' style={{color:'#1eb2a6'}} />                                  
                                       <div> 
                                        <h5>EARN CERTIFICATES</h5>
                                        <p>"Earn a verifiable certificate to boost your resume and advance your career."</p>
                                       </div>
                                    </Card>
                                </Paper>
                                 <Paper sx={{ minWidth: 275,marginTop:'10px' }} className='shadow '>
                                    <Card variant="outlined" className='d-flex p-3 about-content' >
                                        <GrUserExpert className='fs-2 me-3' style={{color:'#1eb2a6'}}  />
                                       <div> 
                                        <h5>LEARN WITH EXPERTS</h5>
                                        <p>"Learn new skills and transform your career, one course at a time."</p>
                                       </div>
                                    </Card>
                                </Paper>
                            </Grid>
                     </div>

                     <div className="col-md-1"></div>
                       <div className='col-md-3'>
                            <Grid xs={12} sm={6} md={6} >
                                <img style={{marginTop:'90px'}} src="https://thumbs.dreamstime.com/b/asian-businesswoman-laptop-documents-business-education-technology-concept-student-office-35132352.jpg" width={'100%'} height={'400px'} className='object-fit-cover' />
                            </Grid>
                       </div>

                    </Grid>
                </Box>
            </div>

        </>
    )
}

export default About