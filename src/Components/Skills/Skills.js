import React from "react";
import { uuid } from "uuidv4";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Chip } from "@material-ui/core";
import { tools, progLanguages, frameworks } from "../../utils/static-data";

const useStyles = makeStyles((theme) => ({
  chip: {
    margin: theme.spacing(1.5),
    fontWeight: 400,
    fontSize: 20,
  },
  avatar: {},
}));

const Skills = () => {
  const classes = useStyles();

  return (
    <>
      <p className="title-header prog">Programming Languages</p>
      <Grid container alignItems="center" justify="center" spacing={3}>
        <Grid item xs={11} style={{ marginTop: 10 }}>
          {progLanguages.map((lang) => (
            <Chip
              key={uuid()}
              variant="outlined"
              size="medium"
              label={lang.name}
              className={classes.chip}
              style={{ marginLeft: 0, marginTop: 0 }}
            />
          ))}
        </Grid>
      </Grid>
      <p className="title-header frameworks" style={{ marginTop: 10 }}>
        Libraries/Frameworks
      </p>
      <Grid container alignItems="center" justify="center" spacing={3}>
        <Grid item xs={11} style={{ marginTop: 10 }}>
          {frameworks.map((skill) => (
            <Chip
              key={uuid()}
              variant="outlined"
              size="medium"
              label={skill.name}
              className={classes.chip}
              style={{ marginLeft: 0, marginTop: 0 }}
            />
          ))}
        </Grid>
      </Grid>
      <p className="title-header tools" style={{ marginTop: 10 }}>
        Tools
      </p>
      <Grid container alignItems="center" justify="center" spacing={3}>
        <Grid item xs={11} style={{ marginBottom: 20, marginTop: 10 }}>
          {tools.map((skill) => (
            <Chip
              key={uuid()}
              variant="outlined"
              size="medium"
              label={skill.name}
              className={classes.chip}
              style={{ marginLeft: 0, marginTop: 0 }}
            />
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default Skills;
