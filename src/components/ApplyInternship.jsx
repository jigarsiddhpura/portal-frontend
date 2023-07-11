import React, { useEffect, useState } from "react";
import { Grid, Typography, Chip, Stack, Button } from "@mui/material";
import ResponsiveDrawer from "../utility/ResponsiveDrawer";
import Avatar from "@mui/material/Avatar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ScheduleIcon from "@mui/icons-material/Schedule";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

import gojo from "../images/gojo.png";
import Pagination from "@mui/material/Pagination";

const ApplyInternship = () => {
  // checking local Storage after each update

  const [internships, setInternships] = useState([]);

  const getInternships = () => {
    try {
      var myHeaders = new Headers();

      myHeaders.append(
        "Authorization",
        "Token 74153f1697d48cb9e8614bb564b7cf2e161d5aa7"
      );

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      fetch(
        "https://ipbackend.pythonanywhere.com/internship-list/",
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => setInternships(JSON.parse(result)))
        .catch((error) => console.log("error", error));
    } catch (err) {
      console.log("Error while fetching", err);
    }
  };

  useEffect(() => {
    getInternships();
  }, []);

  // console.log(internships);
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

  const InternshipCard = ({ items }) => {
    return (
      <ThemeProvider theme={theme}>
        <Grid md={12}>
          {internships.map((internship, index) => {
            var skills = internship.skills.split(",");
            skills = skills.filter((element) => element !== "");
            if (items.includes(internship.id)) {
              return (
                <Grid
                  key={index}
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
                      {internship.internship_Title}
                    </Typography>
                    <Typography variant="body2" gutterBottom align="left">
                      Sridhar Iyer, {internship.internship_Type}
                    </Typography>
                    <Stack
                      direction="row"
                      spacing={1}
                      style={{
                        marginTop: "0.5rem",
                        width: "16rem",
                        // border: "2px solid red",
                        flexWrap: "wrap",
                      }}
                    >
                      <Chip
                        label={internship.internship_Type}
                        color="primary"
                        variant="outlined"
                        style={{ marginBottom: "5px" }}
                      />
                      {skills.map((skill) => (
                        <Chip
                          key={skill}
                          label={skill.trim()}
                          color="primary"
                        />
                      ))}
                    </Stack>
                  </Grid>
                  <Grid item md={3} paddingLeft={3}>
                    <Stack direction="column" spacing={2}>
                      <Stack direction="row" spacing={2}>
                        <CalendarMonthIcon color="success" />
                        <span
                          style={{ color: "black", marginBottom: "0.3rem" }}
                        >
                          {internship.start_date} to <br />
                          {internship.end_date}
                        </span>
                      </Stack>
                      <Stack direction="row" spacing={2}>
                        <ScheduleIcon color="success" />{" "}
                        <span
                          style={{ color: "black", marginBottom: "0.3rem" }}
                        >
                          {internship.organization}
                        </span>
                      </Stack>
                      <Stack direction="row" spacing={2}>
                        <CurrencyRupeeIcon color="success" />{" "}
                        <span
                          style={{ color: "black", marginBottom: "0.3rem" }}
                        >
                          {internship.stipend}
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
                      Apply
                    </Button>
                  </Grid>
                </Grid>
              );
            }
            return null;
          })}
        </Grid>
      </ThemeProvider>
    );
  };

  const AllInternshipCards = ({ itemsPerPage }) => {
    // implemented pagination functionality

    const items = Array.from(
      { length: internships.length },
      (_, index) => index + 1
    );

    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;

    console.log(`Loading items from ${itemOffset} to ${endOffset}`);

    const currentItems = items.slice(itemOffset, endOffset);
    console.log(currentItems);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    const [page, setPage] = useState(1);

    // Invoke when user click to request another page.
    const handleChange = (event, page) => {
      const index = page - 1;
      const newOffset = (index * itemsPerPage) % items.length;
      setItemOffset(newOffset);
      const currentItems = items.slice(itemOffset, endOffset);
      setPage(page);
    };

    return (
      <div style={{ display: "flex", alignItems: "center" , flexDirection:'column'}} >
        <InternshipCard items={currentItems} />

        <Stack spacing={2} style={{ display: "flex", alignItems: "center" }}>
          <Pagination
            className="pagination"
            shape="rounded"
            count={pageCount}
            color="success"
            page={page}
            onChange={handleChange}
          />
        </Stack>
      </div>
    );
  };

  return (
    <>
      <div>
        <ResponsiveDrawer drawerHeading={"All Internships"} />
        <div
          className="InternshipContainer"
          style={{ marginLeft: isDrawerOpen ? "245px" : "10px" }}
        >
          <AllInternshipCards itemsPerPage={4} />
        </div>
      </div>
    </>
  );
};

export default ApplyInternship;
