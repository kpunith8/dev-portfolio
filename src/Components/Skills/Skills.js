import React from "react";
import { uuid } from "uuidv4";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Chip } from "@material-ui/core";
import { skills, progLanguages } from "../../utils/static-data";

const useStyles = makeStyles((theme) => ({
  chip: {
    margin: theme.spacing(1),
    fontWeight: 400,
    fontSize: "17px",
  },
  avatar: {},
}));

const Skills = () => {
  const classes = useStyles();

  return (
    <>
      <p className="title-header skills">Skills</p>
      <Grid container alignItems="center" justify="center" spacing={3}>
        <Grid item xs={11}>
          {progLanguages.map((lang) => (
            <Chip
              key={uuid()}
              variant="default"
              size="medium"
              label={lang.name}
              className={classes.chip}
            />
          ))}
        </Grid>
      </Grid>
      <p className="title-header tools">Frameworks and Tools</p>
      <Grid container alignItems="center" justify="center" spacing={3}>
        <Grid item xs={11} style={{ marginBottom: "30px" }}>
          {skills.map((skill) => (
            <Chip
              key={uuid()}
              variant="default"
              size="medium"
              label={skill.name}
              className={classes.chip}
            />
          ))}
        </Grid>
      </Grid>
      <hr />
    </>
  );
};

export default Skills;
