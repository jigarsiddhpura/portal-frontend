import React from "react";
import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEffect } from "react";
import Grid from "@mui/material/Grid";
import { useFormik } from "formik";
import * as yup from "yup";
import humanAI from "../images/humanAI.png";
import "../css/InternshipForm.css";
import makeAnimated from "react-select/animated";
import { skillsOptions } from "../docs/data.ts";
import Select from "react-select";

const validationSchema = yup.object({
  position: yup.string("ML Engineer").required("Position is required"),
  remote: yup.string("Remote").required("Required Field"),
  duration: yup.string("1 month").required("Required Field"),
  positionsOpen: yup.string("1").required("Position is required"),
  stipend: yup.string("3000").required("Stipend is required"),
  skillsRequired: yup.string("React.js").required("Required Field"),
});

const PostInternshipForm = () => {
  const formik = useFormik({
    initialValues: {
      position: "",
      remote: "",
      duration: "",
      positionsOpen: "",
      stipend: "",
      skillsRequired: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  // adding event listener for responsiveness
  const [width, setWindowWidth] = useState(0);

  const color = "#4A2145";

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
  const resp = responsiveness.responsive;

  const responsiveness2 = { responsive: width < 850 };
  const resp2 = responsiveness2.responsive;

  const Post = styled(Button)({
    backgroundColor: "#85D1A0",
    margin: "1rem",
    borderRadius: "0.3rem",
    marginLeft: "1.2rem",
    textDecoration: "none",
    padding: "12px 15px ",
    width: resp ? "42ch" : "50ch",
    height: "3.1875rem",
    color: "white",
    fontSize: "1rem",
    position: "relative",
    right: resp ? "" : "1.4rem",
    "&:hover": { backgroundColor: "#5E9387", color: "white" },
  });

  const animatedComponents = makeAnimated();

  const [selectedValues, setSelectedValues] = useState([]);

  const handleSelectChange = async (selectedOptions) => {
    setSelectedValues(() => selectedOptions);
  };

  const selectStyles = {
    control: (provided) => ({
      ...provided,
      width: resp ? "42ch" : "50ch",
      // height: selectedValues.length > 3 ? "" : "3.5rem",
      borderRadius: "0.3rem",
    }),
    placeholder: (provided) => ({
      ...provided,
      textAlign: "left", // set the text alignment of the placeholder to left
    }),
  };

  return (
    <Grid
      container
      spacing={2}
      className="postInternship_main_container"
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: resp ? "1rem 0rem" : "2rem 7rem",
        backgroundColor: "#b2ebf2",
      }}
    >
      <Grid
        item
        xs={12} md={6}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <form onSubmit={formik.handleSubmit}>
          <Box
            sx={{
              // maxWidth: "31rem",
              // width: "31rem",
              // height: "38rem",
              // border: "2px solid black",
              display: "flex",
              flexDirection: "column",
              alignItems: resp ? "center" : "flex-start",
              padding: "1rem",
              position: "relative",
              // left:'4rem',
            }}
          >
            <h1 className="formHeader">Post Internship</h1>

            <TextField
              id="position"
              type="text"
              label="Position"
              placeholder="Position"
              name="position"
              onChange={formik.handleChange}
              error={formik.touched.position && Boolean(formik.errors.position)}
              helperText={formik.touched.position && formik.errors.position}
              required
              style={{ marginBottom: "1rem", width: resp ? "42ch" : "50ch" }}
            />

            <TextField
              id="remote"
              type="text"
              label="Remote"
              placeholder="Remote/Onsite"
              name="remote"
              onChange={formik.handleChange}
              error={formik.touched.remote && Boolean(formik.errors.remote)}
              helperText={formik.touched.remote && formik.errors.remote}
              required
              style={{ marginBottom: "1rem", width: resp ? "42ch" : "50ch" }}
            />

            <TextField
              id="duration"
              type="number"
              label="Duration (in months)"
              placeholder="Duration"
              name="duration"
              onChange={formik.handleChange}
              error={formik.touched.duration && Boolean(formik.errors.duration)}
              helperText={formik.touched.duration && formik.errors.duration}
              required
              style={{ marginBottom: "1rem", width: resp ? "42ch" : "50ch" }}
            />

            <TextField
              id="positionsOpen"
              type="number"
              label="Positions Open"
              placeholder="Positions Open"
              name="positionsOpen"
              onChange={formik.handleChange}
              error={
                formik.touched.positionsOpen &&
                Boolean(formik.errors.positionsOpen)
              }
              helperText={
                formik.touched.positionsOpen && formik.errors.positionsOpen
              }
              required
              style={{ marginBottom: "1rem", width: resp ? "42ch" : "50ch" }}
            />

            <TextField
              id="stipend"
              type="number"
              label="Stipend"
              placeholder="Stipend"
              name="stipend"
              onChange={formik.handleChange}
              error={formik.touched.stipend && Boolean(formik.errors.stipend)}
              helperText={formik.touched.stipend && formik.errors.stipend}
              required
              style={{ marginBottom: "1rem", width: resp ? "42ch" : "50ch" }}
            />

            <Select
              required
              className="skillsRequired"
              closeMenuOnSelect={false}
              components={animatedComponents}
              // defaultValue={[skillsOptions[4], skillsOptions[5]]}
              isMulti
              options={skillsOptions}
              theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                colors: {
                  ...theme.colors,
                  primary25: "#b2ebf2",
                  primary: "black",
                },
              })}
              styles={selectStyles}
              onChange={handleSelectChange}
              placeholder="Required skills"
            />

            <div
            // style={{ display: "flex" }}
            >
              <Post type="submit">Post Internship</Post>
            </div>
          </Box>
        </form>
      </Grid>
      <Grid item xs={12} md={6}>
        <img
          src={humanAI}
          alt="humanAI"
          style={{
            height: resp ? "35rem" : "38rem",
            width: resp ? "26rem" : "35rem",
          }}
        />
      </Grid>
    </Grid>
  );
};

const PostInternship = () => {
  return (
    <React.Fragment>
      <PostInternshipForm />
    </React.Fragment>
  );
};

export default PostInternship;
