import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Video from "../components/video";

export default function Videos() {
  return (
    <div>
      {/*=========== মৌলিক Videos ===========*/}
      <Box sx={{ bgcolor: "background.paper", py: 3, mt: 5 }}>
        <Container>
          <Typography variant="h2" sx={{ mb: 1 }}>
            🎞️ মৌলিক Videos ▼
          </Typography>
          <Typography sx={{ color: "#e69138", fontSize: "17px" }}>
            অন্যান্য ভিডিও দেখার সময় সুযোগ না হলেও এই কয়েকটি ভিডিও দেখা
            প্রত্যেকের জন্য আবশ্যক।
          </Typography>
        </Container>
      </Box>
      <Container sx={{ my: 5 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Video
                url={
                  "https://www.youtube.com/embed/WfTaVPVCrsM?si=63qBBIFku3dF2lgo"
                }
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Video
                url={
                  "https://www.youtube.com/embed/4cnj9365sww?si=HHCZ1vskiGTy9l6V"
                }
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Video
                url={
                  "https://www.youtube.com/embed/WJP4izBxp5k?si=QiwJqAOahLoI5Bh0"
                }
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Video
                url={
                  "https://www.youtube.com/embed/Fzo5Sf6k92k?si=JTWVoPAZpxdu8TY1"
                }
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Video
                url={
                  "https://www.youtube.com/embed/iWlOrpiAxI0?si=RHFDrvKnrp4tC7H7"
                }
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
      {/*=========== জীন সম্পর্কিত Videos ===========*/}
      <Box sx={{ bgcolor: "background.paper", py: 3, mt: 5 }}>
        <Container>
          <Typography variant="h2">
          🎞️ জীন সম্পর্কিত Videos:
          </Typography>
        </Container>
      </Box>
      <Container sx={{ my: 5 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Video
                url={
                  "https://www.youtube.com/embed/8KZjFmtCHU8?si=pn4RWSo1_8YsZq9Q"
                }
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Video
                url={
                  "https://www.youtube.com/embed/OLPlxBJDniw?si=QzDpMjUW7CxA2V6c"
                }
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Video
                url={
                  "https://www.youtube.com/embed/WoF3psrjD5M?si=AS88P6V3tDqrBDrS"
                }
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Video
                url={
                  "https://www.youtube.com/embed/PE_4oeqsL5U?si=DRAFlmjkyBwv3ggM"
                }
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Video
                url={
                  "https://www.youtube.com/embed/rYufzX5aWvw?si=1OSkxlQ5LmZoCFSF"
                }
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
      {/*=========== যাদু সম্পর্কিত Videos: ===========*/}
      <Box sx={{ bgcolor: "background.paper", py: 3, mt: 5 }}>
        <Container>
          <Typography variant="h2">
          🎞️ যাদু সম্পর্কিত Videos:
          </Typography>
        </Container>
      </Box>
      <Container sx={{ my: 5 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Video
                url={
                  "https://www.youtube.com/embed/Udgbxy8tyvc?si=jOkPJXfJzcOHwTl4"
                }
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Video
                url={
                  "https://www.youtube.com/embed/K76OkeA-V8Q?si=tbd9NnMnG9REQu3C"
                }
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Video
                url={
                  "https://www.youtube.com/embed/jBZPV235VB8?si=kO7qdI2FGHHdK7VC"
                }
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Video
                url={
                  "https://www.youtube.com/embed/BXaOBXb5A9s?si=482GXs6ndlZq7Aot"
                }
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Video
                url={
                  "https://www.youtube.com/embed/WgkQIRPZPrA?si=hMFlkdWcQe29JPuf"
                }
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
      {/*=========== বদ নজর সম্পর্কিত Videos: ===========*/}
      <Box sx={{ bgcolor: "background.paper", py: 3, mt: 5 }}>
        <Container>
          <Typography variant="h2">
          🎞️ বদ নজর সম্পর্কিত Videos:
          </Typography>
        </Container>
      </Box>
      <Container sx={{ my: 5 }}>
      <Typography>⚠️ রাসূল ﷺ বলেছেন, নিজের প্রয়োজন পূরণ হওয়ার ক্ষেত্রে ‘সেটা গোপন এবং লুকায়িত রাখার’ মাধ্যমে সাহায্য লাভ করো। কেননা, প্রতিটা নিয়ামত লাভকারী হিংসার স্বীকার হয়ে থাকে। (তাবারানী-আওসাতঃ২৫২৯) </Typography>
      <Typography sx={{ mb: 5 }}>⚠️ রাসূল ﷺ আরো বলেছেন: “আল্লাহর ফায়সালা ও তাক্বদিরের পর আমার উম্মতের বড় অংশের মৃত্যু হবে বদনজরের কারণে!”। (মুসনাদে আবি দাউদ ১৮৫৮, সনদ হাসান) </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Video
                url={
                  "https://www.youtube.com/embed/VZN-NI5rye8?si=Hh0-FrpK4pDoXLrM"
                }
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Video
                url={
                  "https://www.youtube.com/embed/nzzGWbhlD0U?si=Ngdd2QYvD2W43PLq"
                }
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Video
                url={
                  "https://www.youtube.com/embed/YfrJ6GUJZ-Q?si=UMsSYcoknMWKepDR"
                }
              />
            </Grid>
            
          </Grid>
        </Box>
      </Container>
      {/*=========== চিকিৎসা চলাকালীন রুগীদের রিঅ্যাকশনের কিছু Videos: ===========*/}
      <Box sx={{ bgcolor: "background.paper", py: 3, mt: 5 }}>
        <Container>
          <Typography variant="h2">
          🎞️ চিকিৎসা চলাকালীন রুগীদের রিঅ্যাকশনের কিছু Videos:
          </Typography>
        </Container>
      </Box>
      <Container sx={{ my: 5 }}>
        <Typography sx={{ mb: 5 }}>চিকিৎসা চলাকালীন রুগীদের রিঅ্যাকশনের কিছু ভিডিও ক্লিপ এখানে দেখানো হলো, যাতে করে চিকিৎসা চলাকালীন রুগীর রিয়াকশন দেখে রুগীর অভিভাবকরা বিব্রত না হয়। তবে সব সময় সব রুগীর ক্ষেত্রে সব ধরনের রিঅ্যাকশন দেখা যায় না। এইসব রিঅ্যাকশন রোগীর সমস্যার ধরন এর উপর নির্ভর করে।</Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Video
                url={
                  "https://www.youtube.com/embed/c0B-oeKXcU4?si=bwDyapcQ0T1Uuxh9"
                }
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Video
                url={
                  "https://www.youtube.com/embed/qrljz15-v0A?si=_nswOnL7VuGhjVij"
                }
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Video
                url={
                  "https://www.youtube.com/embed/8tLDMIwiS9E?si=aCXcwU7r_EpWBf0T"
                }
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Video
                url={
                  "https://www.youtube.com/embed/uoEApQq86H4?si=IPKluyb74RhKAHsV"
                }
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Video
                url={
                  "https://www.youtube.com/embed/0SeN0FglZV0?si=yDdkqJGhf2sOdISV"
                }
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
