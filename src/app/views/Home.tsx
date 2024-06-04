'use client';
import React from 'react';
import Slider from "react-slick";
import Header from '../components/Header';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import EastIcon from '@mui/icons-material/East';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Home() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  };
  return (
    <main className="">
      <Header />
      <section className="banner"> 
        <Container >
            <h1>Discover and <br /> Find Your Own <br /> Fashion!</h1>
            <Button variant="contained" className="explore-btn">Explore Now</Button>
        </Container >
      </section>
      {/* Banner Section End Here */}
      <section className="categories-section">
        <Container>
          <h2>Top Categories</h2>
          <Slider {...settings}>
            <Card className='category-card size-adjust'>
              <img src="/images/category-one.jpg" alt="Kurta" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Kurta
                </Typography>
              </CardContent>
            </Card>
            <Card className='category-card size-adjust'>
              <img src="/images/category-two.webp" alt="Shirt" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Shirt
                </Typography>
              </CardContent>
            </Card>
            <Card className='category-card size-adjust'>
              <img src="/images/category-three.jpg" alt="Tailored 3 Piece" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Tailored 3 Piece
                </Typography>
              </CardContent>
            </Card>
            <Card className='category-card size-adjust'>
              <img src="/images/category-four.webp" alt="Dupatta" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Dupatta
                </Typography>
              </CardContent>
            </Card>
            <Card className='category-card size-adjust'>
              <img src="/images/category-five.jpg" alt="Blouse" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Blouse
                </Typography>
              </CardContent>
            </Card>
            <Card className='category-card size-adjust'>
              <img src="/images/category-six.webp" alt="Sweater" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Sweater
                </Typography>
              </CardContent>
            </Card>
          </Slider>
        </Container>
      </section>
      {/* Categories Section End Here */}
      <section className="categories-section">
        <Container>
          <h2>Brands</h2>
          <Slider {...settings}>
            <Card className='category-card'>
              <div className="brands-logo">
                <img src="/images/brand-one.png" alt="Brand" />
              </div>
              <CardContent className='brands-title'>
                <Typography gutterBottom variant="h5" component="div">
                  Khaadi
                </Typography>
              </CardContent>
            </Card>
            <Card className='category-card'>
              <div className="brands-logo">
                <img src="/images/brand-two.png" alt="Brand" />
              </div>
              <CardContent className='brands-title'>
                <Typography gutterBottom variant="h5" component="div">
                  Ideas
                </Typography>
              </CardContent>
            </Card>
            <Card className='category-card'>
              <div className="brands-logo">
                <img src="/images/brand-three.png" alt="Brand" />
              </div>
              <CardContent className='brands-title'>
                <Typography gutterBottom variant="h5" component="div">
                  Sana Safinaz
                </Typography>
              </CardContent>
            </Card>
            <Card className='category-card'>
              <div className="brands-logo">
                <img src="/images/brand-four.png" alt="Brand" />
              </div>
              <CardContent className='brands-title'>
                <Typography gutterBottom variant="h5" component="div">
                  Alkaram Studio
                </Typography>
              </CardContent>
            </Card>
            <Card className='category-card'>
              <div className="brands-logo">
                <img src="/images/brand-five.png" alt="Brand" />
              </div>
              <CardContent className='brands-title'>
                <Typography gutterBottom variant="h5" component="div">
                  Maria B
                </Typography>
              </CardContent>
            </Card>
            <Card className='category-card'>
              <div className="brands-logo">
                <img src="/images/brand-six.png" alt="Brand" />
              </div>
              <CardContent className='brands-title'>
                <Typography gutterBottom variant="h5" component="div">
                  Nishat Linen
                </Typography>
              </CardContent>
            </Card>
            <Card className='category-card'>
              <div className="brands-logo">
                <img src="/images/brand-seven.png" alt="Brand" />
              </div>
              <CardContent className='brands-title'>
                <Typography gutterBottom variant="h5" component="div">
                  Asim Jofa
                </Typography>
              </CardContent>
            </Card>
            <Card className='category-card'>
              <div className="brands-logo">
                <img src="/images/brand-eight.png" alt="Brand" />
              </div>
              <CardContent className='brands-title'>
                <Typography gutterBottom variant="h5" component="div">
                  Elan
                </Typography>
              </CardContent>
            </Card>
          </Slider>
        </Container>
      </section>
      {/* Brands Section End Here */}
      <section className="available-apps">
        <Container>
          <h2>Download ClothHub</h2>
          <p>Our app is available on any mobile device! Download now!</p>
          <div className="flex-box">
            <img src="/images/google-play.png" alt="Google" />
            <img src="/images/app-store.png" alt="App" />
          </div>
        </Container>
      </section>
      {/* Available Apps Section End Here */}
      <section className="features-section">
        <Container>
          <h2>Features</h2>
          <Grid container spacing={2} className='mt-0 pl-4'>
            <Grid xs={12} sm={6} md={3} className='adjustment-space'>
              <Card className='features-card'>
                <img src="/images/features-one.png" alt="Features" />
                <h3>Brands</h3>
                <p>Find out around 100+ Brands</p>
              </Card>
            </Grid>
            <Grid xs={12} sm={6} md={3} className='adjustment-space'>
              <Card className='features-card'>
                <img src="/images/features-two.png" alt="Features" />
                <h3>Advanced Searching</h3>
                <p>Our Search options makes it easier to find multiple Brands / Products easily</p>
              </Card>
            </Grid>
            <Grid xs={12} sm={6} md={3} className='adjustment-space'>
              <Card className='features-card'>
                <img src="/images/features-three.png" alt="Features" />
                <h3>Sorting / filtering</h3>
                <p>Find Your Focus Sorting and Filtering Made Simple</p>
              </Card>
            </Grid>
            <Grid xs={12} sm={6} md={3} className='adjustment-space'>
              <Card className='features-card'>
                <img src="/images/features-four.png" alt="Features" />
                <h3>Favorites</h3>
                <p>Save your favorite Brand / Product to your favorites list</p>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </section>
      {/* Features Section End Here */}
      <section className="about-section">
        <Container>
          <Grid container spacing={2} className='mt-0 pl-4 align-center'>
            <Grid xs={12} sm={12} md={5} className='adjustment-space'>
              <img src="/images/app-logo.png" alt="Logo" />
            </Grid>
            <Grid xs={12} sm={12} md={7} className='adjustment-space'>
              <Card className="about-card">
                <h3>About Us</h3>
                <p>
                  We are the platform that lists almost every brand of clothes in Pakistan for now, 
                  and our motive is to show all the brands on a single platform with a better user experience,
                  so it’ll save the user time and hundreds of extra clicks. <br />
                  If a user wants to purchase we will redirect the user to the corresponding brand site and they can
                  purchase from there so no fake product issues users are buying from original brands. We are helping 
                  both sides users as well as brands.
                </p>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </section>
      {/* About Section End Here */}
      <section className="footer-section">
        <Container>
        <Grid container spacing={2} className='mt-0 pl-4'>
            <Grid xs={12} sm={6} md={3}>
              <h4>General</h4>
              <Box className="box-wrapper">
                <Link href="javascript:" underline="hover">About us</Link>
                <Link href="javascript:" underline="hover">Privacy Policy</Link>
                <Link href="javascript:" underline="hover">Terms & Condition</Link>
                <Link href="javascript:" underline="hover">FAQs</Link>
              </Box>
            </Grid>
            <Grid xs={12} sm={6} md={3}>
              <h4>Top Categories</h4>
              <Box className="box-wrapper">
                <Link href="javascript:" underline="hover">Kurta</Link>
                <Link href="javascript:" underline="hover">Shirt</Link>
                <Link href="javascript:" underline="hover">Tailored 3 piece</Link>
                <Link href="javascript:" underline="hover">Dupatta</Link>
                <Link href="javascript:" underline="hover">Blouse</Link>
              </Box>
            </Grid>
            <Grid xs={12} sm={6} md={3}>
              <h4>Customer Care</h4>
              <Box className="box-wrapper">
                <Link href="javascript:" underline="hover">Contact us</Link>
                <Link href="javascript:" underline="hover">Customer Support</Link>
              </Box>
            </Grid>
            <Grid xs={12} sm={6} md={3}>
              <h4>News Letter</h4>
              <div className="field-arrow">
                <TextField id="filled-basic" label="Email" variant="filled" />
                <IconButton aria-label="delete" size="small">
                  <EastIcon fontSize="small" />
                </IconButton>
              </div>
              <div className="social-links">
                <Link href="javascript:" underline="none">
                  <WhatsAppIcon fontSize="small" />
                </Link>
                <Link href="javascript:" underline="none">
                  <FacebookIcon fontSize="small" />
                </Link>
                <Link href="javascript:" underline="none">
                  <InstagramIcon fontSize="small" />
                </Link>
                <Link href="javascript:" underline="none">
                  <TwitterIcon fontSize="small" />
                </Link>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
      {/* Footer Section End Here */}
      <section className="all-rights">
        <Container>
          <p>ClothHub 2024. All Right Reserved.</p>
        </Container>
      </section>
    </main>
  );
}