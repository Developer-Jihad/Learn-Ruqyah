import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Link,
  Grid,
  Container,
} from "@mui/material";
import data from "../data/raqyContacts.json"; // Assuming you save your JSON data as raqyContacts.json

interface Center {
  name?: string;
  names?: string[];
  organization?: string;
  address?: string;
  additional_address?: string;
  contact?: string;
  consultation_time?: string;
  page_link?: string;
  notes?: string;
}

interface Locations {
  [key: string]: Center[];
}

const Ruqy: React.FC = () => {
  const locations: Locations = data.locations;

  return (
    <Box sx={{ paddingY: 5 }}>
      <Typography
        variant="h2"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#66BB6A", textAlign: "center" }}
      >
        বাংলাদেশের বিভিন্ন রাক্বির নাম ও যোগাযোগের উপায়
      </Typography>

      <Box sx={{ textAlign: "center", bgcolor: "background.paper", py: 3, my: 3}}>
        <Container>

      <Typography sx={{color: "#e69138", fontSize: "17px",}}>
        ⚠️ লিস্ট দিয়েছি বলেই দৌড় দিয়ে চলে যাবেন না। নিজ দায়িত্বে খোঁজখবর
        নিয়ে যাবেন। ভাল যদি মনে না করেন যাবেন না। ভালমত জেনে বুঝে যাবেন। লিস্টের
        রাকি ছাড়া প্রতিষ্ঠানগুলোতে অন্যান্য রাকি থাকতে পারে। এমন না উক্ত
        প্রতিষ্ঠানে শুধু মাত্র এই রাকিরাই বসেন।
      </Typography>
        </Container>
      </Box>
      
      <Container>
      {Object.keys(locations).map((city, index) => (
        <Box key={index} sx={{ marginBottom: 6 }}>
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: "#1B5E20",
              borderBottom: "3px solid #66BB6A",
              paddingBottom: 1,
              marginBottom: 3,
            }}
          >
            {city}
          </Typography>
          <Grid container spacing={4}>
            {locations[city].map((center, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Card
                  sx={{
                    borderLeft: "6px solid #66BB6A",
                    boxShadow: "0 3px 5px rgba(0, 0, 0, 0.1)",
                    borderRadius: 3,
                    transition: "transform 0.2s, box-shadow 0.2s",
                    "&:hover": {
                      transform: "scale(1.02)",
                      boxShadow: "0 3px 7px rgba(0, 0, 0, 0.1)",
                    },
                  }}
                >
                  <CardContent>
                    {center.name && (
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: "600",
                          color: "#1B5E20",
                          marginBottom: 1,
                        }}
                      >
                        {center.name}
                      </Typography>
                    )}
                    {center.organization && (
                      <Typography
                        variant="h4"
                        sx={{ color: "#616161", marginBottom: 1 }}
                      >
                        প্রতিষ্ঠান: {center.organization}
                      </Typography>
                    )}
                    {center.address && (
                      <Typography
                        variant="body2"
                        sx={{ color: "#757575", marginBottom: 1 }}
                      >
                        ঠিকানা: {center.address}
                      </Typography>
                    )}
                    {center.additional_address && (
                      <Typography
                        variant="body2"
                        sx={{ color: "#757575", marginBottom: 1 }}
                      >
                        অতিরিক্ত ঠিকানা: {center.additional_address}
                      </Typography>
                    )}
                    {center.contact && (
                      <Typography
                        variant="body2"
                        sx={{ color: "#757575", marginBottom: 1 }}
                      >
                        ফোন: {center.contact}
                      </Typography>
                    )}
                    {center.consultation_time && (
                      <Typography
                        variant="body2"
                        sx={{ color: "#757575", marginBottom: 1 }}
                      >
                        কন্সালটেশন সময়: {center.consultation_time}
                      </Typography>
                    )}
                    {center.page_link && (
                      <Link
                        href={center.page_link}
                        target="_blank"
                        rel="noopener"
                        sx={{
                          color: "#2E7D32",
                          textDecoration: "underline",
                          fontWeight: "500",
                          display: "block",
                          marginBottom: 1,
                        }}
                      >
                        ফেইসবুক পেইজ
                      </Link>
                    )}
                    {center.notes && (
                      <Typography
                        variant="body2"
                        sx={{ marginTop: 1, color: "#757575" }}
                      >
                        নোটস: {center.notes}
                      </Typography>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
      </Container>
    </Box>
  );
};

export default Ruqy;
