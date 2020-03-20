import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Chip, Avatar } from "@material-ui/core";
import { skills, progLanguages } from "../../utils/static-data";

const useStyles = makeStyles(theme => ({
  chip: {
    margin: theme.spacing(1),
    fontWeight: 400,
    fontSize: "17px"
  },
  avatar: {}
}));

const Skills = () => {
  const classes = useStyles();

  return (
    <>
      <p className="skills">Skills</p>
      <Grid container alignItems="center" justify="center" spacing={3}>
        <Grid item xs={11}>
          {progLanguages.map(lang => (
            <Chip
              variant="default"
              avatar={
                <Avatar style={{ fontSize: "17px", color: "blue" }}>
                  {lang.stars}
                </Avatar>
              }
              size="medium"
              label={lang.name}
              className={classes.chip}
            />
          ))}
        </Grid>
      </Grid>
      <p className="tools">Frameworks and Tools</p>
      <Grid container alignItems="center" justify="center" spacing={3}>
        <Grid item xs={11} style={{ marginBottom: "30px" }}>
          {skills.map(skill => (
            <Chip
              variant="default"
              avatar={
                <Avatar style={{ fontSize: "17px", color: "blue" }}>
                  {skill.stars}
                </Avatar>
              }
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
