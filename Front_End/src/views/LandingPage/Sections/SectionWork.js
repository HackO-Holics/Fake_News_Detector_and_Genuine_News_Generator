import React from "react";
// @material-ui/core components
import {  withStyles } from "@material-ui/core/styles";
import './textarea.scss';
import './loading.scss';
import axios from 'axios';
import {Animated} from 'react-animated-css';

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import workStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/workStyle.js";
import SectionGenunieNews from "./SectionGenunieNews";



class SectionWork extends React.Component {
  state =  {
    message: '',
    data: {},
    loaded: -1
  }

  onBodyChange = e => {
    this.setState({
      message: e.target.value
    });
  };
  getPred = () =>{
    this.setState({
      loaded: 0
    })
    const data = {"message": this.state.message}
    axios.post('https://verify-fake-news-api.herokuapp.com/api', data).then(res=>{
      console.log(res.data)
      this.setState({
        data: res.data,
        loaded: 1
      })
    })
    
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem cs={12} sm={8} md={8}>
            <h2 className={classes.title}>Fake News Detection</h2>
            <h4 className={classes.description}>
              Just paste the aritcle in the text area and click on verify button, then just sit back and see the magic of machine learning unfold.
            </h4>
            <form>
              <GridContainer>
                <textarea
                  rows={4}
                  type='text'
                  id="text"
                  value = {this.state.message}
                  onChange={this.onBodyChange}
                  style={{overflow:'hidden',wordWrap:'break-word',resize:'none',height:'160px',width:'100%',marginBottom:'25px'}}
                />
                <GridItem
                  xs={12}
                  sm={12}
                  md={12}
                  className={classes.mrAuto + " " + classes.mlAuto + " " + classes.mtAuto}
                >
                  <Button color="success" onClick={this.getPred}>Verify News</Button>
                </GridItem>
                  
              </GridContainer>
            </form>
            <GridItem cs={12} sm={12} md={12}>
              {this.state.loaded===1?(this.state.data.prediction===0?
                (<div>
                  <Animated animationIn='fadeIn' animationInDelay={1200}>
                  <h3 className={classes.title + " " + classes.textCenter}>The News Entered was Genuine</h3><br/>
                  <h4 className={classes.title + " " + classes.textCenter}>Here are some more related news</h4>
                  </Animated>
                </div>):(<div>
                  <Animated animationIn='fadeIn' animationInDelay={600}>
                  <h3 className={classes.title + " " + classes.textCenter}>The News Entered was Fake</h3><br/>
                  <h4 className={classes.title + " " + classes.textCenter}>But here are some genuine news related to the matter</h4>
                  </Animated>
                </div>)):
                (this.state.loaded===0?(
                <Animated animationIn="fadeIn" animationInDelay={600}>
                <div className={"loader"}>
                <span>C</span>
                <span>A</span>
                <span>L</span>
                <span>C</span>
                <span>U</span>
                <span>L</span>
                <span>A</span>
                <span>T</span>
                <span>I</span>
                <span>N</span>
                <span>G</span>
                <span>.</span>
                <span>.</span>
                <span>.</span>
              </div>
              </Animated>):null)}
            </GridItem>
            <GridItem cs={12} sm={12} md={12}>
              {this.state.loaded===1?(this.state.data?(
              <div>
              <Animated animationIn='fadeInDown' animationInDelay={600}>
              <GridContainer justify="center">
              {this.state.data.related_news?this.state.data.related_news.slice(0,3).map((x)=>{
                  return (<SectionGenunieNews key={x.link } title={x.title} biliner={x.biliner} img={x.img} link={x.link}/>)
              }):(<h4>Sorry We Could find any news related the article entered</h4>)}
              </GridContainer>
              </Animated>
              </div>):null):null}
            </GridItem>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}
export default withStyles(workStyle)(SectionWork)