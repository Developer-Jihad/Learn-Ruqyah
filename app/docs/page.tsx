import React from "react";
import { Container, Grid, Box, Typography, Link } from "@mui/material";
import Bookmark from "../components/bookmark";
import Image from "next/image";
import docsIcon from "../../app/images/icons/document.png";


export default function Docs() {
  return (
    <Box>
      <Container>
      <Box
          sx={{
            display: "flex",
            gap: 1,
            alignItems: "center",
            mt: 5,
            mb: 2,
          }}
        >
          <Image src={docsIcon} alt="Documents logo" width={33} height={30} />
          <Typography variant="h2">রুকইয়াহ First-Aid</Typography>
        </Box>
        <br />
        <Typography variant="body1" align="justify" sx={{ mb: 1, lineHeight: 2 }}>
          1. ঘর হতে সবগুলো প্রাণীর ছবি/ মুর্তি, তাবিজ, কুকুর এবং সকল অপবিত্রতা অপসারণ করে ঘরকে পবিত্র করুন।
          (এগুলো থাকলে ঘরে রহমতের ফেরেশতা প্রবেশ করে না। অনেক সময় বই, ক্যালেন্ডার বা কোন পন্যের মোড়কেও প্রাণীর ছবি থাকে।
          ছবি ফেলে দেওয়া না গেলে কোন কিছুর ভিতরে ঢুকিয়ে রাখুন অথবা প্রাণীর চেহারাটা অন্তত মুছে দিন। অর্থাৎ কোন ভাবেই ঘরে ছবি যাতে প্রদর্শিত না থাকে।) 
          <br />
          2. ঘরে উচ্চস্বরে সূরা বাকারা তিলাওয়াত করুন/ অডিও চালু করে রাখুন এবং আযান দিন। (৩ দিন)
          <br />
          3. নিজে রুকিয়াহ সম্পর্কে জানুন এবং পরিবারকে রুকিয়াহ সম্পর্কে সচেতন করুন।
          <br />
          4. প্রতিদিন সকাল-সন্ধায়, ঘুমের পূর্বে এবং পাঁচ-ওয়াক্ত সালাতের পরের সুন্নাহ-সম্মত জিকির গুলো গুরুত্ব সহকারে করুন।
          <br />
          5. বেশি বেশি কোরআন তেলাওয়াত করুন/শুনুন। (বিশেষ করে- আয়াতুল কুরসী, সুরা বাকারার শেষ ২ আয়াত, সুরা ইখলাস, ফালাক এবং নাস)
          <br />
          6. ঘরে প্রবেশের সময় এবং খাওয়ার সময় অবশ্যই অবশ্যই বিসমিল্লাহ বলতে হবে। ভুলে বিসমিল্লাহ না বলে ঘরে প্রবেশ করলে, ঘর থেকে বাহির হয়ে পুনরায় বিসমিল্লাহ বলে ঢুকুন।
          (কারণ- কেউ বিসমিল্লাহ না বলে ঘরে প্রবেশ করলে তার সঙ্গে শয়তানও ঘরে প্রবেশ করে)। আর খাওয়ার শুরুতে বিসমিল্লাহ বলতে ভুলে গেলে &quot;বিসমিল্লাহি আওয়ালাহু ওয়া আখিরহু&quot; এই দোয়াটি পড়বেন 
          (কারণ- কেউ খাওয়ার সময় বিসমিল্লাহ না বললে শয়তানও তার খাওয়ায় শরিক হয়)।
          <br />
          7. ফরজ ইবাদত গুলোতে সর্বোচ্চ গুরুত্ব দিন। (যেমন: নামাজ, পর্দা ইত্যাদি)
          <br />
          8. গোসল ফরজ হয়ে গেলে বিলম্ব না করে তাড়াতাড়ি পবিত্রতা অর্জন করুন।
          <br />
          9. বিশেষ করে, কোনভাবেই যাতে কোন কবিরা গুনাহ হয়ে না যায়, সেদিকে খেয়াল রাখবেন। (এমনকি সগীরা গুনাহ গুলো থেকেও মুক্ত থাকার চেষ্টা করুন)
          <br />
          10. মানুষের প্ররোচনায় বিভ্রান্ত হয়ে কোন কবিরাজ, তান্ত্রিকের কাছে যাওয়া তো দূরের কথা, ভুলেও কোন কবিরাজী চিকিৎসার সাথে জড়াবেন না।
          <br />
          11. দোয়া এর ফলে আল্লাহর ইচ্ছায় মানুষের তাকদিরও পরিবর্তন হয় এমন সব ফজিলত মাথায় রেখে, মনে প্রানে সারাক্ষণ আল্লাহর কাছে দোয়া করতে থাকুন।
          <br />
          12. এই আমলগুলো দুই একদিন করেই থেমে যাবেন না। যতদিন পর্যন্ত সুস্থতা না আসে ততদিন করতেই থাকুন। বরং এই সুন্নত আমলগুলোকে আকড়ে ধরুন।
          <br />
          13. অন্যান্য কাজ সম্পন্ন করার পাশাপাশি আর্থিক এবং মানসিকভাবে রুকিয়াহর জন্য প্রস্তুতি নিন।
          <br />
          14. দুনিয়াতে মৃত্যু ব্যতীত এমন কোন রোগ নেই, যার সুস্থতা আল্লাহ নাযিল করেননি। এসকল বিষয় মাথায় রেখে আল্লাহর উপর পরিপূর্ণ আস্থা এবং বিশ্বাস স্থাপন করুন।
        </Typography>
      </Container>
      <Box sx={{ bgcolor: "#101e2c", py: 3, mt: 5 }}>
        <Container>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            alignItems: "center",
          }}
        >
          <Image src={docsIcon} alt="Documents logo" width={33} height={30} />
          <Typography variant="h2">Learn More About Ruqyah</Typography>
        </Box>
        </Container>
      </Box>
      <Container sx={{ my: 3 }}>
          <Typography sx={{ color: "orange", fontSize: "17px" }}>
            রুকইয়াহ সম্পর্কে আরো বিস্তারিত জানতে নিচের সোর্স গুলো অনুসরন করুন।
          </Typography>
          <br/>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid container item spacing={3}>
              <Grid item xs={12} sm={6} md={4}>
                <Bookmark
                  title="রুকইয়াহ বই"
                  description="&lsquo;রুকইয়াহ&rsquo; বইটিতে ইসলামসম্মত স্প্রিচ্যুয়াল হিলিং নিয়ে সহজ ভাষায় বিস্তর আলোচনা করা হয়েছে। ... Read More"
                  url="https://ruqyahbd.org/shop"
                  coverImage="./ruqyahBook.jpg"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Bookmark
                  title="রুকইয়াহ সাপোর্ট বিডি (Website)"
                  description="রুকইয়াহ সম্পর্কিত প্রায় সকল তথ্য এই ওয়েবসাইটে খুব সহজেই জানতে পারবেন। ... Read More"
                  url="https://ruqyahbd.org/"
                  coverImage="./ruqyahSupportBdLogo.jpg"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Bookmark
                  title="Ruqyah Short PDF"
                  description="সংক্ষেপে রুকইয়াহ সম্পর্কে জানতে এই পিডিএফটি পড়তে পারেন। ... Read More"
                  url="https://drive.google.com/file/d/162ZGtGea1bmQWxbD0_QRTM3tyRjquzig/view"
                  coverImage="./ruqyahShortPDF.png"
                />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
