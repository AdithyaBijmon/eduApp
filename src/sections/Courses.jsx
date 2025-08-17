import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';


function Courses() {
  return (
    <>
      <div className='text-center my-3'>
        <h4 className='pt-5' style={{ color: '#1eb2a6', fontWeight: 'bold' }}>Our Courses</h4>
        <h1>Explore our popular online Courses</h1>
      </div>

      <div className='container '>
        <div className='row my-5'>
        <div className='col-md-3 col-12 col-sm-6'>
            <Card sx={{ maxWidth: 300,height:'260px'  }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                   height="180"
                  image="https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div" className='text-center' sx={{color:'#1eb2a6',fontWeight:'bold'}}>
                    UI/UX Design
                  </Typography>
                 
                </CardContent>
              </CardActionArea>
            </Card>
        </div>

        <div className='col-md-3 col-12 col-sm-6 mt-4'>
            <Card sx={{ maxWidth: 300,height:'260px'  }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                   height="180"
                  image="https://miro.medium.com/v2/resize:fit:1400/1*U-dpS_nbQuGcO5iMoTDIvg.jpeg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div" className='text-center' sx={{color:'#1eb2a6',fontWeight:'bold'}}>
                    Art and Design
                  </Typography>
                 
                </CardContent>
              </CardActionArea>
            </Card>
        </div>
     <div className='col-md-3 col-12 col-sm-6 '>
            <Card sx={{ maxWidth: 300,height:'260px'  }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                   height="180"
                  image="https://img.freepik.com/free-vector/website-development-banner_33099-1687.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div" className='text-center' sx={{color:'#1eb2a6',fontWeight:'bold'}}>
                    Web Development
                  </Typography>
                
                </CardContent>
              </CardActionArea>
            </Card>
     </div>
         <div className='col-md-3 col-12 col-sm-6 mt-4'>
            <Card sx={{ maxWidth: 300,height:'260px'  }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                   height="180"
                  image="https://static.vecteezy.com/system/resources/thumbnails/038/936/587/small/ai-generated-graphic-designer-s-vibrant-workspace-with-illustration-on-monitor-photo.jpeg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div" className='text-center' sx={{color:'#1eb2a6',fontWeight:'bold'}}>
                    Graphic Designing
                  </Typography>
              
                </CardContent>
              </CardActionArea>
            </Card>
         </div>
        </div>

        <div className='row'>
    <div className='col-md-3 col-12 col-sm-6 '>
            <Card sx={{ maxWidth: 300,height:'260px' }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                   height="180"
                  image="https://media.istockphoto.com/id/1443560890/photo/digital-marketing-business-technology-concept-website-advertisement-email-social-media.jpg?s=612x612&w=0&k=20&c=S7d_Mof_fEsM69inW540APogoXkz-eA23XE1AIhTaBA="
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div" className='text-center' sx={{color:'#1eb2a6',fontWeight:'bold'}}>
                   Digital marketing
                  </Typography>
               
                </CardContent>
              </CardActionArea>
            </Card>
    </div>

     <div className='col-md-3 col-12 col-sm-6 mt-4'>
            <Card sx={{ maxWidth: 300,height:'260px'  }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                   height="180"
                  image="https://static.vecteezy.com/system/resources/thumbnails/026/433/446/small/abstract-musical-note-symbol-painting-black-background-generative-ai-photo.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div" className='text-center' sx={{color:'#1eb2a6',fontWeight:'bold'}}>
                    Music
                  </Typography>
                 
                </CardContent>
              </CardActionArea>
            </Card>
     </div>
        <div className='col-md-3 col-12 col-sm-6 '>
            <Card sx={{ maxWidth: 300,height:'260px'  }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                   height="180"
                  image="https://www.allbusinessschools.com//wp-content/uploads/2022/06/Biz-Admin-hub-750x350-1.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div"  className='text-center' sx={{color:'#1eb2a6',fontWeight:'bold'}}>
                    Business Administration
                  </Typography>
                
                </CardContent>
              </CardActionArea>
            </Card>
        </div>
        <div className='col-md-3 col-12 col-sm-6 mt-4'>
            <Card sx={{ maxWidth: 300 ,height:'260px' }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                   height="180"
                  image="https://www.jagannath.org/blog/wp-content/uploads/2021/02/Picture1.png"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div" className='text-center' sx={{color:'#1eb2a6',fontWeight:'bold'}}>
                    ML and AI
                  </Typography>
            
                </CardContent>
              </CardActionArea>
            </Card>
        </div>
        </div>
      </div>


    </>
  )
}

export default Courses