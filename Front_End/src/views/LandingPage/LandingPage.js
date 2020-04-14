import React from "react";
import classNames from "classnames";
import { Animated } from "react-animated-css";
import ScrollAnimation from 'react-animate-on-scroll'

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";

import landingPageStyle from "assets/jss/material-kit-pro-react/views/landingPageStyle.js";

// Sections for this page
import SectionProduct from "./Sections/SectionProduct.js";
import SectionTeam from "./Sections/SectionTeam.js";
import SectionWork from "./Sections/SectionWork.js";

const useStyles = makeStyles(landingPageStyle);

export default function LandingPage({ ...rest }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        color="transparent"
        brand="Fake News Detector"
        fixed
        changeColorOnScroll={{
          height: 300,
          color: "dark"
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/bgmain.jpg")} filter="dark">
        <div className={classes.container}>
        <Animated
            animationIn="fadeInUp"
            animationInDelay= {1500}
            isVisible={true}
        >
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
            
              <h1 className={classes.title}>Fake News Detector and Genuine News Generator</h1>
              
              <h4>
                This app uses cutting edge machine learning algorithms to predict
                wheater the news article entered by user is real or fake.
              </h4>
            
            </GridItem>
          </GridContainer>
          </Animated>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <SectionProduct />
          <ScrollAnimation animateIn="fadeInUp">
          <SectionWork />
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp">
          <SectionTeam />
          </ScrollAnimation>
          
        </div>
      </div>
      <Footer
        content={
          <div>
            <div className={classes.left}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="mailto:teamhackoholic@gmail.com"
                    className={classes.block}
                  >
                    Mail Us!
                  </a>
                </ListItem>
              </List>
            </div>
            <div className={classes.right}>
              &copy; {1900 + new Date().getYear()} , made with{" "}
              <Favorite className={classes.icon} /> by{" "}
              <a
                href="mailto:teamhackoholic@gmail.com"
                className={classes.block}
              >
                Team Hackoholics
              </a>
            </div>
          </div>
        }
      />
    </div>
  );
}
