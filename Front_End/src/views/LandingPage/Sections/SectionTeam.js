import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import  from "@material-ui/icons/";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Muted from "components/Typography/Muted.js";
import Button from "components/CustomButtons/Button.js";

import teamsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/teamsStyle.js";
import teamStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/teamStyle.js";

const style = {
  ...teamsStyle,
  ...teamStyle,
  justifyContentCenter: {
    justifyContent: "center"
  }
};

const useStyles = makeStyles(style);

export default function SectionTeam() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Here is our team</h2>
      <h4 className={classes.title}>Our Moto: To provide better solutions to current and future problems</h4>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={6}>
            <Card profile plain className={classes.card3}>
              <GridContainer>
                <GridItem xs={12} sm={5} md={5}>
                  <CardHeader image plain>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img src={require('../../../assets/img/team/dpscaptain.jpg')} alt="..." />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: `url(${require('../../../assets/img/team/dpscaptain.jpg')})`,
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                </GridItem>
                <GridItem xs={12} sm={7} md={7}>
                  <CardBody plain>
                    <h4 className={classes.cardTitle}>Shivam Singhal</h4>
                    <Muted>
                      <h6 className={classes.cardCategory}>Captain and Backend Developer </h6>
                    </Muted>
                  </CardBody>
                  <CardFooter plain className={classes.justifyContentCenter}>
                    <Button justIcon simple color="linkedin" href="https://www.linkedin.com/in/shivam-singhal-682321175/">
                      <i className="fab fa-linkedin" />
                    </Button>
                    <Button justIcon simple color="instagram" href="https://www.instagram.com/shivam_singhal.10/">
                      <i className="fab fa-instagram" />
                    </Button>
                    <Button justIcon simple color="github" href="https://github.com/ShivamSinghal1">
                      <i className="fab fa-github" />
                    </Button>
                  </CardFooter>
                </GridItem>
              </GridContainer>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <Card profile plain className={classes.card3}>
              <GridContainer>
                <GridItem xs={12} sm={5} md={5}>
                  <CardHeader image plain>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img src={require('../../../assets/img/team/dpsnone.jpg')} alt="..." />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: `url(${require('../../../assets/img/team/dpsnone.jpg')})`,
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                </GridItem>
                <GridItem xs={12} sm={7} md={7}>
                  <CardBody plain>
                    <h4 className={classes.cardTitle}>Saurabh Kumar</h4>
                    <Muted>
                      <h6 className={classes.cardCategory}>ML Engineer</h6>
                    </Muted>
                  </CardBody>
                  <CardFooter plain className={classes.justifyContentCenter}>
                    <Button justIcon simple color="linkedin" href="#">
                      <i className="fab fa-linkedin" />
                    </Button>
                    <Button justIcon simple color="facebook" href="#">
                      <i className="fab fa-instagram" />
                    </Button>
                    <Button justIcon simple color="github" href="https://github.com/saturn660">
                      <i className="fab fa-github" />
                    </Button>
                  </CardFooter>
                </GridItem>
              </GridContainer>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <Card profile plain className={classes.card3}>
              <GridContainer>
                <GridItem xs={12} sm={5} md={5}>
                  <CardHeader image plain>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img src={require('../../../assets/img/team/dpsbackend.jpg')} alt="..." />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: `url(${require('../../../assets/img/team/dpsbackend.jpg')})`,
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                </GridItem>
                <GridItem xs={12} sm={7} md={7}>
                  <CardBody plain>
                    <h4 className={classes.cardTitle}>Anunay Gupta</h4>
                    <Muted>
                      <h6 className={classes.cardCategory}>Backend Developer and ML Engineer</h6>
                    </Muted>
                  </CardBody>
                  <CardFooter plain className={classes.justifyContentCenter}>
                    <Button justIcon simple color="linkedin" href="https://www.linkedin.com/in/anunay-gupta-46362216b/">
                      <i className="fab fa-linkedin" />
                    </Button>
                    <Button justIcon simple color="facebook" href="https://www.facebook.com/anunay.gupta.92">
                      <i className="fab fa-facebook-square" />
                    </Button>
                    <Button justIcon simple color="github" href="https://github.com/AnunayGupta">
                      <i className="fab fa-github" />
                    </Button>
                  </CardFooter>
                </GridItem>
              </GridContainer>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <Card profile plain className={classes.card3}>
              <GridContainer>
                <GridItem xs={12} sm={5} md={5}>
                  <CardHeader image plain>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img src={require('../../../assets/img/team/dpsmain2.jpg')} alt="Shreyansh Gupta"/>
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: `url(${require('../../../assets/img/team/dpsmain2.jpg')})`,
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                </GridItem>
                <GridItem xs={12} sm={7} md={7}>
                  <CardBody plain>
                    <h4 className={classes.cardTitle}>Shreyansh Gupta</h4>
                    <Muted>
                      <h6 className={classes.cardCategory}>Front-End Developer and ML Engineer</h6>
                    </Muted>
                  </CardBody>
                  <CardFooter plain className={classes.justifyContentCenter}>
                    <Button justIcon simple color="linkedin" href="https://www.linkedin.com/in/shreyansh-gupta-b33b41173">
                      <i className="fab fa-linkedin" />
                    </Button>
                    <Button justIcon simple color="facebook" href="https://www.facebook.com/shreyansh.gupta.18/">
                      <i className="fab fa-facebook-square" />
                    </Button>
                    <Button justIcon simple color="github" href="https://github.com/mrFahrenhiet">
                      <i className="fab fa-github" />
                    </Button>
                  </CardFooter>
                </GridItem>
              </GridContainer>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
