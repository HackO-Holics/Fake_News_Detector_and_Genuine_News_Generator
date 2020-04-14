import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ScrollAnimation from 'react-animate-on-scroll'
// @material-ui/icons
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Grade from '@material-ui/icons/Grade';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import productStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(productStyle);

export default function SectionProduct() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={8} md={8}>
          <ScrollAnimation animateIn="fadeInUp">
          <h2 className={classes.title}>Let{"'"}s talk about it</h2>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp">
          <h5 className={classes.description}>
            Fake news is nothing new. But bogus stories can reach more people more quickly via social media than what good old-fashioned viral emails could accomplish in years past.
            A lot of these viral claims aren’t “news” at all, but fiction, satire and efforts to fool readers into thinking they’re for real.
            Therefore we developed this app for fighting this disease of fake news.This app will provide you with-
          </h5>
          </ScrollAnimation>
        </GridItem>
      </GridContainer>
      <div>
        <ScrollAnimation animateIn="fadeInUp">
        <GridContainer>
        {/* <GridItem xs={12} sm={4} md={4}>
             <InfoArea
              title="Verified Users"
              description="We use cutting edge machine learning algoritms to identify the word pattern, design and design pattern the news was written with and classify it as fake or real"
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem> */}
          
          <GridItem xs={12} sm={6} md={6}>
            <InfoArea
              title="Great Accuracy"
              description="We use cutting edge machine learning algorithms to identify the word pattern, design and design pattern using which the news was written with and classify it as fake or real"
              icon={Grade}
              iconColor="warning"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              title="Verified News"
              description="Our keyword detection algorithm will help you get real and genuine news from verified news channels or services like Google news, TOI(Times of India), etc"
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
        </GridContainer>
        </ScrollAnimation>
      </div>
    </div>
  );
}
