# Fake News Detector & Genuine News Teller
## Overview -
These days’ fake news is creating different issues from sarcastic articles to fabricated news and plan government propaganda in some outlets. Fake news on social media apps such as Whatsapp , Twitter , Facebook related to pandemics such as COVID-19 has the power to create panics leading to damage of life and property greater than the deadliest of terror attacks known to humankind.

Thus we thought of a webapp on which an user can enter the news articles. This news would be tested for falsivity by our machine learning algorithm and then we will extract important keywords from this news, these keywords are used for telling the user genuine news by scraping it from an esteemed news website.

To understand the relevance of our Fake news detector let us consider the example of recent mass migration of labourers from metropolitan cities to their respective villages fearing starvation . The migration happened because most of the public was misinformed about the Lockdown and rumours such as “Lockdown to be extended for 3 months” were rampant , the public was not informed about the relief measures taken by the government. Had there been an app such as ours wherein users could have searched for rumours such as “Indian Govt. extend lockdown for 3 months”,they would have found the news to be baseless , they would have also known the relief measures taken by the government and hence the problem of labourers could have been completely avoided . 

## Goals -  
  1) Easy UI that takes as input any text, can be a news article and gives 2 outputs, predict fake or real and reliable news related to that input.
  2) Build a system to identify unreliable news articles. 
  3) Build a system to pick important keywords and provide all the Genuine news articles related to the news provided by the user.

## Challenges - 
  1) We would need to prepare a large self made dataset because a ready to use  dataset for coronavirus related news is not available. In order to overcome this challenge we would have to scrape and organize a large number of news articles that should contain both fake and real news.
  2) We would have to optimize, test and cross validate various machine learning models in order to get good results across multiple types of news as well as news related to covid-19.
  3) Picking up important keywords from the input is important so that the user will get genuine and related news.

## Use Case - 
  1) This project will help us to stop the chain of fake news forwarded by people on social media platforms especially on platforms like whatsapp and facebook.
  2) Help people to get actual facts rather than some made up facts which are forward with the intentions of leading them to a wrong path. 
  3) This can cause people to make better decisions in the real world especially while voting , as they will have facts instead of fake whatsapp news messages.

