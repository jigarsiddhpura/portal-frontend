import React from "react";
import { useState, useEffect, useContext } from "react";
import { Grid, Typography, Chip, Stack, Button } from "@mui/material";
import ResponsiveDrawer from "../utility/ResponsiveDrawer";
import Avatar from "@mui/material/Avatar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ScheduleIcon from "@mui/icons-material/Schedule";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import AppContext from "../AppContext";
import gojo from "../images/gojo.png";
import Pagination from "@mui/material/Pagination";

const ApplyResearch = () => {

  // adding event listener for responsiveness
  const [width, setWindowWidth] = useState(0);

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  const responsiveness = { responsive: width < 1100 };
  const resp = responsiveness.responsive; //sm

  const responsiveness2 = { responsive: width < 840 };
  const resp2 = responsiveness2.responsive; //xs


  var [isDrawerOpen, setIsDrawerOpen] = useState(true);

  const [researchPapers, setResearchPapers] = useState([]);

  const getResearchPapers = () => {
    try {
      var myHeaders = new Headers();
      myHeaders.append(
        "Authorization",
        "Token 57e32c9351107fbc6b6d171e48472567d223fa7e"
        // above is student ka token
      );
      myHeaders.append("Cookie", "csrftoken=o9U6wKWbEVIt5Ha31j7UIfXxtowMJPR6");

      var urlencoded = new URLSearchParams();

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      fetch(
        "https://ipbackend.pythonanywhere.com/users/Research_ProjectList/",
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => setResearchPapers(JSON.parse(result)))
        .catch((error) => console.log("error", error));
    } catch (err) {
      console.log("Error while fetching research papers : ", err);
    }
  };

  useEffect(() => {
    getResearchPapers();
  }, []);

  // checking local Storage after each update
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

  const OpenGmailTab = (email) => {
    console.log("clicked")
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
    window.open(gmailUrl,'_blank') 
  }

  const {selectedTags, setSelectedTags} = useContext(AppContext)
  const [filteredResearchPapers, setFilteredResearchPapers] = useState(researchPapers)

  // Filter researchPapers whenever selectedTags change
  useEffect(() => {
    console.log(selectedTags);
    if (Object.values(selectedTags).every((list) => list.length === 0)) {
      setFilteredResearchPapers(researchPapers);
    } else {
      const filtered = researchPapers.filter((researchp) =>
        (
          selectedTags.internship_Title.includes(researchp.topic)
        ) // filtering position
      );
      setFilteredResearchPapers(filtered);
    }
  }, [selectedTags,researchPapers]);

  const ResearchCard = ({items}) => {

    return (
      <ThemeProvider theme={theme}>
        <Grid md={12}>
          {
            filteredResearchPapers.map((researchp, index) => {
              var skills = researchp.skills.split(",");
              skills = skills.filter((element) => element !== "");
              if(items.includes(researchp.id)){
                return (
                  <Grid
                  key={researchp.id}
                  container
                  elevation={2}
                  style={{
                    border: "1px solid gray",
                    borderRadius: "5px",
                    width: resp2 ? "30rem" : "45rem",
                    padding: "1rem",
                    margin: "2rem 0 0 5rem",
                    position:resp2 ? "relative" : "",
                    left:'3rem'
                  }}
                >
                  <Grid
                    item
                    xs={6}
                    sm={4}
                    md={3}
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
                  <Grid item xs={6} sm={4} md={5}>
                    <Typography variant="h5" gutterBottom align="left">
                      {researchp.topic}
                    </Typography>
                    <Typography variant="body2" gutterBottom align="left">
                      Sridhar Iyer
                    </Typography>
                    <Stack direction="row" spacing={1} style={{ marginTop: "0.5rem" }}>
                    {skills.map((skill) => (
                        <Chip
                          key={skill}
                          label={skill.trim()}
                          color="primary"
                        />
                      ))}
                    </Stack>
                  </Grid>
                  <Grid
                    item xs={12} sm={4} md={4}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Button variant="contained" color="secondary" onClick={() => OpenGmailTab(researchp.professor)}
                    style={{marginTop:resp?'2rem':'0rem'}}
                    >
                      Apply
                    </Button>
                  </Grid>
                </Grid>
                );
              }
              return null;
            })
          }
        </Grid>
      </ThemeProvider>
    );
  };

  function extractIdsFromList(list) {
    const idList = [];
    
    for (let i = 0; i < list.length; i++) {
      const item = list[i];
      const id = item.id;
      
      idList.push(id);
    }
    
    return idList;
  }

  const AllResearchCards = ({itemsPerPage}) => {
     // implemented pagination functionality

    //  const items = Array.from(
    //   { length: researchPapers.length },
    //   (_, index) => index + 1
    // );

    const items = extractIdsFromList(filteredResearchPapers)

    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;

    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);

    const currentItems = items.slice(itemOffset, endOffset);
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
        <ResearchCard items={currentItems} />

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
        <ResponsiveDrawer drawerHeading={"All Research Paper"} />
        <div
          className="researchContainer"
          style={{ marginLeft: isDrawerOpen ? "245px" : "10px" }}
        >
          <AllResearchCards itemsPerPage={4} />
        </div>
      </div>
    </>
  );
};

export default ApplyResearch;
