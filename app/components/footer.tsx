import React from "react";
import Link from "next/link";
import { Container, Grid, Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#101e2c",
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
            <Link href="/">
              <Typography variant="body2">Home</Typography>
            </Link>
            <Link href="/videos">
              <Typography variant="body2">All Videos</Typography>
            </Link>
            <Link href="/docs">
              <Typography variant="body2">All Document</Typography>
            </Link>
            <Link href="/diagnosis">
              <Typography variant="body2">ডায়াগনোসিস</Typography>
            </Link>
          </Grid>

          {/* Column 2 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h5" gutterBottom color={"#64D264"}>
              <b>Trusted Links</b>
            </Typography>

            
              <Link href="https://ruqyahbd.org/">
                <Typography variant="body2">
                  Ruyah Support BD (Website + Apps)
                </Typography>
              </Link>

              <Link href="https://duaruqyah.com/ruqyah">
                <Typography variant="body2">
                  Dua & Ruqyah (Website + App)
                </Typography>
              </Link>
            

              <Link href="https://www.youtube.com/@HijamaRuqyaBD">
                <Typography variant="body2">
                  Hijama & Ruqya BD (YouTube)
                </Typography>
              </Link>
            
              <Link href="https://www.facebook.com/sukunlife">
                <Typography variant="body2">
                  SukunLife (Facebook Page)
                </Typography>
              </Link>
          </Grid>
        </Grid>
        <Typography
          variant="body2"
          color={"#98E59A"}
          pt={2}
          textAlign={"center"}
        >
          <q>Learn Ruqyah and Share the Knowledge</q> | © 2024 - Jihad (Web Developer) at{" "}
          <a target="_blank" href="https://skill.assunnahfoundation.org/">
            <abbr title="As-Sunnah Skill Development Institute">ASSDI</abbr>
          </a>
          . All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
