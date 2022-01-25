import React from "react";
import GithubIcon from "@material-ui/icons/Github";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  icon: {
    color: "#ffbf00",
  },
}));

const socialItems = [
  { icon: GithubIcon, url: "https://github.com/Fluva74", name: "github" },
  { icon: TwitterIcon, url: "https://twitter.com/MikeFin54739502", name: "twitter" },
  { icon: LinkedInIcon, url: "https://www.linkedin.com/in/mike-finnegan-596a96225/", name: "linkedin" },
];

export default function Social({ direction }) {
  const styles = useStyles();
  return (
    <Grid container direction={direction || "row"} spacing={1}>
      {socialItems.map((item) => (
        <Grid item key={item.name}>
          <Link href={item.url}>
            <IconButton>
              <item.icon className={styles.icon}/>
            </IconButton>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}