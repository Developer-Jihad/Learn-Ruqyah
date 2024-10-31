import React from "react";
import Link from "next/link";
import { Container, Grid, Box, Typography } from "@mui/material";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#212932",
        color: "white",
        pb: 3,
        mt: "90px",
      }}
    >
      <Container maxWidth="lg">
        <br />
        <Grid container spacing={3}>
          {/* Column 1 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h5" gutterBottom color={"#64D264"}>
              <b>About Us</b>
            </Typography>
            <Typography>
              ঘরে ঘরে কুরআন সুন্নাহ ভিত্তিক রুকিয়াহ সচেতনতা বৃদ্ধির লক্ষে আমাদের
              এই প্রচেষ্টা ... <br />
              ওয়ামা তাওফীকী ইল্লা বিল্লাহ । <br />
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h5" gutterBottom color={"#64D264"}>
              <b>Contact Info</b>
            </Typography>
            <Typography variant="body2">
              jihad.developer.bd@gmail.com
            </Typography>
            <Typography variant="body2">Phone: +88 01303 417 316</Typography>
            <Typography variant="body2">Address: Dhaka, Bangladesh.</Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h5" gutterBottom color={"#64D264"}>
              <b>Quick Links</b>
            </Typography>
            <Typography variant="body2">
              <Link href="/">Home</Link>
            </Typography>
            <Typography variant="body2">
              <Link href="/videos">All Videos</Link>
            </Typography>
            <Typography variant="body2">
              <Link href="/docs">All Document</Link>
            </Typography>
            <Typography variant="body2">
              <Link href="/diagnosis">ডায়াগনোসিস</Link>
            </Typography>
          </Grid>

          {/* Column 2 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h5" gutterBottom color={"#64D264"}>
              <b>Trusted Links</b>
            </Typography>

            <Typography variant="body2">
              <Link href="https://ruqyahbd.org/">
                Ruyah Support BD (Website + Apps)
              </Link>
            </Typography>

            <Typography variant="body2">
              <Link href="https://duaruqyah.com/ruqyah">
                Dua & Ruqyah (Website + App)
              </Link>
            </Typography>

            <Typography variant="body2">
              <Link href="https://www.youtube.com/@HijamaRuqyaBD">
                Hijama & Ruqya BD (YouTube)
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link href="https://www.facebook.com/sukunlife">
                SukunLife (Facebook Page)
              </Link>
            </Typography>
          </Grid>
        </Grid>
        <br/>
        <hr/>
        <Typography variant="body2" pt={2}
          textAlign={"center"}> © {currentYear} - Jihad 👨🏻‍💻 All Rights Reserved.</Typography>
      </Container>
    </Box>
  );
};

export default Footer;
