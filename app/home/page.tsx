import React from "react";
import Link from "next/link";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Video from "../components/video";
import Bookmark from "../components/bookmark";
import Image from "next/image";
import DescriptionIcon from "@mui/icons-material/Description";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";

export default function Home() {
  return (
    <Box>
      {/* ==========/////// Hero Area ///////==========*/}
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Container
          sx={{
            height: {
              xs: "20vh",
              md: "25vh",
              lg: "30vh",
            },
            backgroundSize: "cover",
            backgroundImage: "url('Ruqyah-Web-Banner.png')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </Box>
      <Container sx={{ mt: 3 }}>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            mt: 5,
            mb: 2,
          }}
        >
          <DescriptionIcon sx={{ color: "#66BB6A" }} />
          <Typography variant="h2"> রুকইয়াহ (Ruqyah) কি? </Typography>
        </Box>

        <Typography align="justify" sx={{ mb: 1, textIndent: "17pt" }}>
          ঝাড়ফুঁককে আরবীতে রুকইয়াহ বলা হয়। মানুষের দৃশ্য-অদৃশ্য যে কোনো রোগের
          জন্য-ই ঝাড়ফুঁক করা যায়। রুকইয়াহর পারিভাষিক অর্থ হচ্ছে- কোরআনের আয়াত,
          আল্লাহর নামের যিকর এবং রাসূল ﷺ থেকে বর্ণিত বিভিন্ন দোয়া পাঠ করার
          মাধ্যমে আল্লাহর কাছে কোন বিপদ বা রোগ থেকে মুক্তি চাওয়া।
          চিকিৎসাবিজ্ঞানের আলোকে কোন রোগের চিকিৎসা থাকুক কিংবা নাথাকুক
          সর্বাবস্থায় শারীরিক, মানসিক, অতিপ্রাকৃতিক যেকোন রোগের জন্য রুকইয়াহ
          কার্যকরী।
        </Typography>
        <Typography align="justify">
          রুকইয়াহ মনের আশা পূরণের কোন যাদু-মন্ত্র নয় কিংবা অনৈতিক ফায়দা হাসিলের
          কোন তদবিরও নয় বরং এটি কুরআন সুন্নাহ নির্দেশীত একটি চিকিৎসা পদ্ধতি।
          আধুনিক পরিভাষায় এটাকে Spiritual healing বলা যায়।
        </Typography>
      </Container>

      {/* -------------- Most Important Videos --------------- */}
      <Box sx={{ bgcolor: "#212932", py: 3, mt: 5 }}>
        <Container>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <VideoLibraryIcon sx={{ color: "#66BB6A" }} />
            <Typography variant="h2">মৌলিক Videos</Typography>
          </Box>
        </Container>
      </Box>
      <Container sx={{ my: 5 }}>
        <Typography sx={{ color: "orange" }}>
          অন্যান্য ভিডিও দেখার সুযোগ না হলেও এই কয়েকটি ভিডিও অবশ্যই দেখুন।
        </Typography>
        <br />
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={8}>
              <Video
                url={
                  "https://www.youtube.com/embed/WfTaVPVCrsM?si=63qBBIFku3dF2lgo"
                }
              />
            </Grid>
            <Grid container item spacing={3} xs={12} sm={12} md={4}>
              <Grid item xs={12} sm={6} md={12}>
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: 0,
                    paddingBottom: "56.25%",
                  }}
                >
                  <Link
                    href="https://youtu.be/4cnj9365sww?si=2W2q1N_9LXD6vilG"
                    target="_blank"
                    passHref
                  >
                    <Image
                      src="/ruqyahSeminar.jpg"
                      fill
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                        borderRadius: "10px",
                      }}
                      alt="Picture of the author"
                    />
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={12}>
                <Video
                  url={
                    "https://www.youtube.com/embed/WJP4izBxp5k?si=QiwJqAOahLoI5Bh0"
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  sx={{
                    width: "100%",
                    backgroundColor: "#66BB6A",
                    "&:hover": {
                      backgroundColor: "#1B5E20",
                    },
                  }}
                  variant="contained"
                  size="medium"
                  endIcon={<SendIcon />}
                >
                  <Link href="/videos" passHref>
                    <b>See All Videos</b>
                  </Link>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <br />
      <Container>
        <Box
          sx={{
            display: "flex",
            gap: 1,
          }}
        >
          <DescriptionIcon sx={{ color: "#66BB6A" }} />
          <Typography variant="h2">রুকইয়াহ বৈধ হওয়ার শর্ত:</Typography>
        </Box>
        <br />
        <Typography align="justify" sx={{ mb: 1 }}>
          রুকইয়াহ বৈধও হতে পারে আবার অবৈধও হতে পারে। যদি শরীয়তসম্মত পন্থায় করা
          হয়, তাহলে বৈধ হবে অন্যথায় অবৈধ হবে। রুকইয়াহ শরীয়তসম্মত হওয়ার জন্য
          তিনটি শর্ত রয়েছে: <br /> ১. মহান আল্লাহর কালাম, তাঁর নাম বা গুণাবলি
          কিংবা রাসূল ﷺ থেকে বর্ণিত বিভিন্ন দোয়া দ্বারা রুকইয়াহ করা। <br /> ২.
          আরবী ভাষায় কিংবা এমন ভাষায় হওয়া, যা সবাই বুঝতে পারে। <br /> ৩.
          রুকইয়াহর ক্ষেত্রে এই বিশ্বাস রাখতে হবে যে, রোগ নিরাময় বা বিপদ দূর
          হওয়ার বিষয়ে রুকইয়াহর নিজস্ব কোনো শক্তি নেই। রুকইয়াহ শুধু ওসীলা মাত্র।
          মূলত যে কোনো রোগ বা বিপদ আল্লাহর ইচ্ছাতেই দূর হতে পারে। <br /> [আল
          মাউসুআতুল ফিকহিয়া আল কুওয়াইতিয়া: ২৩/৯৭]
        </Typography>
      </Container>
      <br />
      {/* -------------- Get Help From Raqies ---------------- */}
      <Box sx={{ bgcolor: "#212932", py: 3, my: 5 }}>
        <Container>
          <Box
            sx={{
              display: "flex",
              gap: 1,
              alignItems: "center",
            }}
          >
            <PermPhoneMsgIcon sx={{ color: "#66BB6A" }} />
            <Typography variant="h2">রাক্বিদের সাহায্য নিন</Typography>
          </Box>
        </Container>
      </Box>
      <Container sx={{ my: 3 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6}>
              <Video
                url={
                  "https://www.youtube.com/embed/GFvtirknkAc?si=BJLzH999zUfOYbyq"
                }
              />
            </Grid>
            <Grid container item spacing={3} xs={12} sm={12} md={6}>
              <Grid item xs={6} sm={6} md={6}>
                <Bookmark
                  title="রাক্বিদের বিষয়ে দায়মুক্তি"
                  description="আমি কোনো রিস্ক নিব না। রিস্কের সম্ভবনাও যেখানে দেখবো তার কথা বলবো না। তাই বলে অন্যরা সব খারাপ তা বলছি না। ... Read More"
                  url="https://ruqyahbd.org/blog/4649/disclaimer-about-raqis"
                  coverImage="./teaching.png"
                />
              </Grid>
              <Grid container spacing={3} item xs={6} sm={6} md={6}>
                <Grid item xs={12}>
                  <Bookmark
                    title="রাক্বি Contacts"
                    description="লিস্ট দিয়েছি বলেই দৌড় দিয়ে চলে যাবেন না। নিজ দায়িত্বে খোঁজখবর নিয়ে... Read More"
                    url="/ruqy"
                    coverImage="./ruqy.png"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    sx={{
                      width: "100%",
                      backgroundColor: "#66BB6A",
                      "&:hover": {
                        backgroundColor: "#1B5E20",
                      },
                    }}
                    variant="contained"
                    size="medium"
                    endIcon={<SendIcon />}
                  >
                    <Link href="/docs" passHref>
                      <b>See All Docs</b>
                    </Link>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <br />
        <Typography variant="h4" color={"#98E59A"} pt={2} textAlign={"center"}>
          <q>Learn Ruqyah and Share the Knowledge</q>
        </Typography>
      </Container>
    </Box>
  );
}
