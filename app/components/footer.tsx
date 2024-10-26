import React from "react";
import { Container, Grid, Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "primary.main",
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
              এই পথ চলা... <br />
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
            <Typography variant="body2" py={1}>
              Phone: +88 01303 417 316
            </Typography>
            <Typography variant="body2">Address: Dhaka, Bangladesh.</Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h5" gutterBottom color={"#64D264"}>
              <b>Quick Links</b>
            </Typography>
            <Box>
              <Link href="/" color="inherit" underline="hover" variant="body2">
                Home
              </Link>
            </Box>
            <Box>
              <Link
                href="/videos"
                color="inherit"
                underline="hover"
                variant="body2"
              >
                Videos
              </Link>
            </Box>
            <Box>
              <Link
                href="/docs"
                color="inherit"
                underline="hover"
                variant="body2"
              >
                Documents
              </Link>
            </Box>
            <Box>
              <Link
                href="/docs"
                color="inherit"
                underline="hover"
                variant="body2"
              >
                Raqy Contacts
              </Link>
            </Box>
          </Grid>

          {/* Column 2 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h5" gutterBottom color={"#64D264"}>
              <b>Trusted Links</b>
            </Typography>

            <Box>
              <Link
                href="https://ruqyahbd.org/"
                color="inherit"
                underline="hover"
                variant="body2"
              >
                Ruyah Support BD (Website + Apps)
              </Link>
            </Box>

            <Box>
              <Link
                href="https://duaruqyah.com/ruqyah"
                color="inherit"
                underline="hover"
                variant="body2"
              >
                Dua & Ruqyah (Website + App)
              </Link>
            </Box>

            <Box>
              <Link
                href="https://www.youtube.com/@HijamaRuqyaBD"
                color="inherit"
                underline="hover"
                variant="body2"
              >
                Hijama & Ruqya BD (YouTube)
              </Link>
            </Box>
            <Box>
              <Link
                href="https://www.facebook.com/sukunlife"
                color="inherit"
                underline="hover"
                variant="body2"
              >
                SukunLife (Facebook Page)
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Typography
          variant="body2"
          color={"#98E59A"}
          pt={2}
          textAlign={"center"}
        >
          <q>Learn Ruqyah and Share the Knowledge</q>  |  © 2024 - Md Jihad Hossain - Web Developer at{" "}
          <a target="_blank" href="https://skill.assunnahfoundation.org/">
            <abbr title="As-Sunnah Skill Development Institute">ASSDI</abbr>
          </a>
          .  All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
