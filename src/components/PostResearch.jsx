import React from "react";
import { useState } from "react";
import { Grid, Typography, Chip, Stack, Button } from "@mui/material";
import ResponsiveDrawer from "../utility/ResponsiveDrawer";
import Avatar from "@mui/material/Avatar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ScheduleIcon from "@mui/icons-material/Schedule";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

import gojo from "../images/gojo.png";

const PostResearch = () => {
  // checking local Storage after each update
  var [isDrawerOpen, setIsDrawerOpen] = useState(true);

  window.onstorage = () => {
    setIsDrawerOpen(JSON.parse(window.localStorage.getItem("drawerOpen")));
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#4A2145",
      },
      secondary: {
        main: "#85D1A0",
      },
    },
  });

  const ResearchCard = () => {
    return (
      <ThemeProvider theme={theme}>
        <Grid
          container
          elevation={2}
          style={{
            border: "1px solid gray",
            borderRadius: "5px",
            width: "50rem",
            padding: "1rem",
            margin: "2rem 0 0 5rem",
          }}
        >
          <Grid
            item
            xs={12}
            sm={3}
            md={2}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src={gojo}
              sx={{ width: 56, height: 56 }}
            />
          </Grid>
          <Grid item md={4}>
            <Typography variant="h5" gutterBottom align="left">
              Research on xyz
            </Typography>
            <Typography variant="body2" gutterBottom align="left">
              Sridhar Iyer
            </Typography>
            <Stack direction="row" spacing={1} style={{ marginTop: "0.5rem" }}>
              <Chip label="FULL TIME" color="primary" variant="outlined" />
              <Chip label="CV" color="primary" />
              <Chip label="NLP" color="primary" />
            </Stack>
          </Grid>
          <Grid item md={3} paddingLeft={3}>
            <Stack direction="column" spacing={2}>
              <Stack direction="row" spacing={2}>
                <CalendarMonthIcon color="success" />{" "}
                <span style={{ color: "black", marginBottom: "0.3rem" }}>
                  {" "}
                  20hrs/week{" "}
                </span>
              </Stack>
              <Stack direction="row" spacing={2}>
                <ScheduleIcon color="success" />{" "}
                <span style={{ color: "black", marginBottom: "0.3rem" }}>
                  {" "}
                  20hrs/week{" "}
                </span>
              </Stack>
              <Stack direction="row" spacing={2}>
                <CurrencyRupeeIcon color="success" />{" "}
                <span style={{ color: "black", marginBottom: "0.3rem" }}>
                  {" "}
                  5000{" "}
                </span>
              </Stack>
            </Stack>
          </Grid>
          <Grid
            item
            md={3}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button variant="contained" color="secondary">
              Edit
            </Button>
          </Grid>
        </Grid>
      </ThemeProvider>
    );
  };

  const AllResearchCards = () => {
    return (
      <React.Fragment>
        <ResearchCard />
      </React.Fragment>
    );
  };

  return (
    <>
      <div>
        <ResponsiveDrawer drawerHeading={"All Research Paper"} />
        <div
          className="researchContainer"
          style={{ marginLeft: isDrawerOpen ? "245px" : "10px" }}
        >
          <AllResearchCards />
        </div>
      </div>
    </>
  );
};

export default PostResearch;
