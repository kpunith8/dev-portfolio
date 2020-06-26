import React from "react";
import { uuid } from "uuidv4";
import BuildIcon from "@material-ui/icons/Build";
import CodeIcon from "@material-ui/icons/Code";
import ListAltIcon from "@material-ui/icons/ListAlt";
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
      <div style={{ display: "flex", alignItems: "center" }}>
        <p className="title-header prog">Tech Skills</p>
        <CodeIcon className="s-icon" style={{ fontSize: 40 }} />
      </div>
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
      <hr className="line-break" />

      <div style={{ display: "flex", alignItems: "center" }}>
        <p className="title-header frameworks">Libraries/Frameworks</p>
        <ListAltIcon className="s-icon" style={{ fontSize: 36 }} />
      </div>
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
      <hr className="line-break" />

      <div style={{ display: "flex", alignItems: "center" }}>
        <p className="title-header tools">Tools</p>
        <BuildIcon className="s-icon" style={{ fontSize: 32 }} />
      </div>
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
      <hr className="line-break" />
    </>
  );
};

export default Skills;
