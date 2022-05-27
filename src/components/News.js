import React, { Component } from 'react'
import NewsItem from './NewsItem';

export class News extends Component {
    articles = [
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Ukraine war latest news: Donbas could be left uninhabitable, Zelensky says",
            "description": "The Ukrainian president accuses Russia of carrying out a genocide in the region and wanting to \"burn\" it.",
            "url": "http://www.bbc.co.uk/news/live/world-europe-61593803",
            "urlToImage": "https://m.files.bbci.co.uk/modules/bbc-morph-news-waf-page-meta/5.2.0/bbc_news_logo.png",
            "publishedAt": "2022-05-27T06:22:22.9115789Z",
            "content": "What we are seeing from the Russians are very slow,\r\nvery deliberate and very familiar tactics, where they are trying to encircle an\r\nincreasing number of locations in the Donbas, which is their prio… [+1484 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Josh Cavallo: Proud my coming out inspired Jake Daniels",
            "description": "The Australian Josh Cavallo became the only current openly gay professional footballer after he came out last year.",
            "url": "http://www.bbc.co.uk/news/world-61594480",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/EA63/production/_124930006_dsc00014.jpg",
            "publishedAt": "2022-05-27T05:52:17.2088684Z",
            "content": "By Shaimaa KhalilAustralia correspondent\r\nMedia caption, Go out there and live it - Cavallos advice for Daniels\r\nThese past few months have been an extraordinary time for Josh Cavallo. \r\nLast year, t… [+4345 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Twitter investors sue Elon Musk and platform over takeover bid",
            "description": "The lawsuit alleges the multi-billionaire's \"wrongful conduct\" has caused Twitter shares to plunge.",
            "url": "http://www.bbc.co.uk/news/business-61589229",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/17361/production/_124937059_gettyimages-1240408699.jpg",
            "publishedAt": "2022-05-27T04:52:20.2869389Z",
            "content": "By Annabelle LiangBusiness reporter\r\nImage source, Getty Images\r\nTwitter investors are suing Elon Musk and the social media platform over the handling of the billionaire's $44bn (£34.9bn) bid for the… [+2795 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Brazilian man allegedly gassed to death in police car boot",
            "description": "Genivaldo de Jesus Santos was stopped in the street by highway police in the city of Umbaúba on Wednesday.",
            "url": "http://www.bbc.co.uk/news/world-latin-america-61601669",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/FBD9/production/_124937446_gettyimages-1228345105.jpg",
            "publishedAt": "2022-05-27T04:37:20.0367183Z",
            "content": "Image source, Getty Images\r\nThe death of a black man who was forced into a police car boot where a gas grenade was set off has sparked outrage in Brazil.\r\nPolice stopped Genivaldo de Jesus Santos, 38… [+3075 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC Sport",
            "title": "Canada cancel Iran friendly after MPs' criticism",
            "description": "Canada Soccer cancels its men's friendly with Iran after criticism from MPs because Iranian armed forces shot down an airliner in 2020.",
            "url": "http://www.bbc.co.uk/sport/football/61595942",
            "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/17253/production/_124930849_tv074919365.jpg",
            "publishedAt": "2022-05-26T23:22:27.2707673Z",
            "content": "Doneil Henry helped Canada qualify for their first men's World Cup in 36 years in March\r\nCanada Soccer has cancelled their men's friendly with Iran in Vancouver on 5 June after criticism by Canadian … [+1440 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Depeche Mode keyboardist Andy Fletcher dies",
            "description": "The band say they are \"shocked and filled with overwhelming sadness\" in a statement on social media.",
            "url": "http://www.bbc.co.uk/news/entertainment-arts-61597992",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/D717/production/_124936055_mediaitem124936054.jpg",
            "publishedAt": "2022-05-26T23:22:22.7094025Z",
            "content": "By Doug FaulknerBBC News\r\nImage source, Getty Images\r\nDepeche Mode keyboardist Andy Fletcher has died, the band has announced.\r\nThe band said they were \"shocked and filled with overwhelming sadness w… [+2337 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Ancient DNA reveals secrets of Pompeii victims",
            "description": "It is an almost complete set of \"genetic instructions\" from people who died when Mount Vesuvius erupted.",
            "url": "http://www.bbc.co.uk/news/science-environment-61557424",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/CFEF/production/_124913235_mediaitem124888179.jpg",
            "publishedAt": "2022-05-26T19:52:23.8131857Z",
            "content": "By Victoria GillScience correspondent, BBC News\r\nImage source, Notizie degli Scavi di Antichita,1934, p. 286, fi\r\nImage caption, Remains of two individuals found in the Casa del Fabbro, or House of t… [+3392 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Amber Heard: It's easy to forget I'm a human being",
            "description": "Heard found herself in a tense exchange with Johnny Depp's attorney as the trial nears its end.",
            "url": "http://www.bbc.co.uk/news/world-us-canada-61599667",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/6FE3/production/_124934682_gettyimages-1240916583.jpg",
            "publishedAt": "2022-05-26T19:37:28.639441Z",
            "content": "By Bernd Debusmann JrBBC News, Washington\r\nImage source, Getty Images\r\nImage caption, Amber Heard in court on 26 May\r\nAmber Heard says she felt humiliated and had faced hundreds of daily death threat… [+2492 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Uvalde shooting: Texas Rangers defend school massacre response",
            "description": "There has been criticism of an apparent delay in confronting the teenage gunman who killed 21 people in Uvalde.",
            "url": "http://www.bbc.co.uk/news/world-us-canada-61600914",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/A67F/production/_124932624_mediaitem124932623.jpg",
            "publishedAt": "2022-05-26T19:37:22.1082447Z",
            "content": "Image caption, People have been laying flowers near the school campus in Uvalde as tributes\r\nPolice in Texas have been defending the response to a mass shooting at a school amid criticism of an appar… [+1194 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Goodfellas star Ray Liotta dies aged 67",
            "description": "The actor died in his sleep in the Dominican Republic, his publicist confirms.",
            "url": "http://www.bbc.co.uk/news/entertainment-arts-61600212",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1106F/production/_124934796_new_gettyimages-1179406403-3.jpg",
            "publishedAt": "2022-05-26T17:22:20.7650802Z",
            "content": "The US star had been on location filming the movie Dangerous Waters, his publicist Jennifer Allan said."
        }
    ]
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false
        }
    }
    render() {
        return (
            <div>
                <div className="container my-3 ">
                    <h1>NewsPedia-Top Headlines</h1>
                    <div className="row">
                        {this.state.articles.map((element) => {
                            return <div className="col-md-4 my-3" key={element.url}>
                                <NewsItem title={element.title.slice(0,30)} description={element.description.slice(0,80)} imgUrl={element.urlToImage} newsUrl={element.url} />
                            </div>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default News