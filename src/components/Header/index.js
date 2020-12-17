import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  textHeader: {
    marginRight: theme.spacing(80),
  },
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <AppBar position="relative">
      <Toolbar>
        <Link href="/" color="inherit">
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.textHeader}
          >
            AJS
          </Typography>
        </Link>

        <Link href="/signin" color="inherit">
          <Button color="inherit">Sign in</Button>
        </Link>
        <Link href="/signup" color="inherit">
          <Button color="inherit">Sign up</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
