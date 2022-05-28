import React, { Component } from 'react'
import NewsItem from './NewsItem';

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }
    async componentDidMount() {
        // Top business headlines in the India right now
        let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=d5f76180e6e54f42861c6f9fb07fde23&page=1pageSize=12"
        let data = await fetch(url)
        let parsedData = await data.json()   // to parse data into json
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults
        })
    }

    handlePrevClick = async () => {
        console.log("Previous");
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=d5f76180e6e54f42861c6f9fb07fde23&page=${this.state.page - 1}&pageSize=12`
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })

    }

    handleNextClick = async () => {
        console.log("Next");
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / 12)) {

        }
        else {
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=d5f76180e6e54f42861c6f9fb07fde23&page=${this.state.page + 1}&pageSize=12`;
            let data = await fetch(url);
            let parsedData = await data.json()
            console.log(parsedData);
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles
            })
        }
    }



    render() {
        return (
            <div className="container my-3 ">
                <h1 className='text-center'><b>NewsPedia-Top Headlines</b></h1>
                <h3 className='my-3'><b>Top business headlines in the India right now</b></h3>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4 my-3" key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 30) : ""} description={element.description ? element.description.slice(0, 80) : ""} imgUrl={element.urlToImage ? element.urlToImage : "https://t3.ftcdn.net/jpg/04/84/88/76/360_F_484887682_Mx57wpHG4lKrPAG0y7Q8Q7bJ952J3TTO.jpg"} newsUrl={element.url} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    {/* &larr and &rarr are used to fet the right and left arrow keys */}
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 12)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News