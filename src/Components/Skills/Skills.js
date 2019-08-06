import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Chip, Typography, Avatar } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  skills: {
    display: "grid",
    alignItems: "center",
    justifyItems: "center",
    padding: "10px",
    color: "#db5704"
  },
  list: {
    width: "100%",
    maxWidth: "800px",
    backgroundColor: theme.palette.background.paper
  },
  chip: {
    margin: theme.spacing(1),
    textDecoration: "bold",
    fontSize: "17px"
  },
  tools: {
    display: "grid",
    alignItems: "center",
    justifyItems: "center",
    padding: "10px",
    color: "#db5704",
    marginTop: "15px"
  }
}));

const Skills = () => {
  const classes = useStyles();
  const skills = [
    { name: "Git", stars: 8 },
    { name: "Java 8", stars: 7 },
    { name: "Stream API", stars: 7 },
    { name: "Maven", stars: 6 },
    { name: "ES6", stars: 7.5 },
    { name: "Redux", stars: 8 },
    { name: "Express.js", stars: 7 },
    { name: "Jest", stars: 6 },
    { name: "Svelte.js", stars: 6 },
    { name: "MERN Stack", stars: 6 },
    { name: "GraphQL", stars: 5 },
    { name: "NoSQL", stars: 5 },
    { name: "TDD", stars: 7 },
    { name: "Clean Code", stars: 8 },
    { name: "Open Source", stars: 7 },
    { name: "Functional Programming", stars: 6 }
  ];

  const progLanguages = [
    { name: "JavaScript", stars: 7.5 },
    { name: "Java", stars: 7 },
    { name: "NodeJS", stars: 7 },
    { name: "React", stars: 8 },
    { name: "HTML5", stars: 6.5 },
    { name: "CSS", stars: 6.5 }
  ];
  return (
    <div style={{ backgroundColor: "#d3dbe8", margin: "0px" }}>
      <Typography
        color="textPrimary"
        gutterBottom
        variant="h4"
        className={classes.skills}
      >
        Skills
      </Typography>
      <Grid container alignItems="center" justify="center" spacing={2}>
        <Grid item xs={6}>
          {progLanguages.map(lang => (
            <Chip
              variant="default"
              avatar={<Avatar>{lang.stars}</Avatar>}
              size="medium"
              label={lang.name}
              className={classes.chip}
            />
          ))}
        </Grid>
      </Grid>
      <Typography
        color="textPrimary"
        gutterBottom
        variant="h4"
        className={classes.tools}
      >
        Tools & Frameworks
      </Typography>
      <Grid container alignItems="center" justify="center" spacing={2}>
        <Grid item xs={6} style={{ marginBottom: "30px" }}>
          {skills.map(skill => (
            <Chip
              variant="default"
              avatar={<Avatar>{skill.stars}</Avatar>}
              size="medium"
              label={skill.name}
              className={classes.chip}
            />
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default Skills;
