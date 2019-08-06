import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardContent,
  IconButton,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";

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
  }
}));

const Skills = () => {
  const classes = useStyles();
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
          <List component="nav" className={classes.list}>
            <ListItem divider>
              <ListItemText primary="JavaScript" />
              <IconButton edge="end">
                <Rating value={7.5} precision={0.5} max={10} readOnly />
              </IconButton>
            </ListItem>
            <ListItem  divider>
              <ListItemText primary="Java" />
              <IconButton edge="end">
                <Rating value={7.5} precision={0.5} max={10} readOnly />
              </IconButton>
            </ListItem>
            <ListItem divider>
              <ListItemText primary="Node.js" />
              <IconButton edge="end">
                <Rating value={6} precision={0.5} max={10} readOnly />
              </IconButton>
            </ListItem>
            <ListItem divider>
              <ListItemText primary="React" />
              <IconButton edge="end">
                <Rating value={8} precision={0.5} max={10} readOnly />
              </IconButton>
            </ListItem>
            <ListItem divider>
              <ListItemText primary="MySQL, MongoDB" />
              <IconButton edge="end">
                <Rating value={6} precision={0.5} max={10} readOnly />
              </IconButton>
            </ListItem>
            <ListItem divider>
              <ListItemText primary="HTML5" />
              <IconButton edge="end">
                <Rating value={6} precision={0.5} max={10} readOnly />
              </IconButton>
            </ListItem>
            <ListItem divider>
              <ListItemText primary="CSS3" />
              <IconButton edge="end">
                <Rating value={6} precision={0.5} max={10} readOnly />
              </IconButton>
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Typography
        color="textPrimary"
        gutterBottom
        variant="h5"
        className={classes.skills}
      >
        Tools and other skills
      </Typography>
    </div>
  );
};

export default Skills;
