import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem';
import Spinner from './Spinner';

export class News extends Component {
    static defaultProps = {
        pageSize: 9,
        country: "in",
        category:"general"

    }
    static propTypes = {
        pageSize: PropTypes.number.isRequired,  //ptsr-propType number required
        country: PropTypes.string.isRequired,   //ptsr-propType string required
        category: PropTypes.string.isRequired   //ptsr-propType string required  

    }
    

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
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d5f76180e6e54f42861c6f9fb07fde23&page=1&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })

        let data = await fetch(url)
        let parsedData = await data.json()   // to parse data into json
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
    }

    handlePrevClick = async () => {
        console.log("Previous");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d5f76180e6e54f42861c6f9fb07fde23&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })

        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })

    }

    handleNextClick = async () => {
        console.log("Next");
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d5f76180e6e54f42861c6f9fb07fde23&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({ loading: true })

            let data = await fetch(url);
            let parsedData = await data.json()
            console.log(parsedData);
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false
            })
        }
    }



    render() {
        return (
            <div className="container my-3 ">
                <h1 className='text-center my-5'><b>NewsPedia-Top Headlines</b></h1>

                <div className="row">
                    {this.state.loading && <Spinner />}
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4 my-3" key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 30) : ""} description={element.description ? element.description.slice(0, 80) : ""} imgUrl={element.urlToImage ? element.urlToImage : "https://t3.ftcdn.net/jpg/04/84/88/76/360_F_484887682_Mx57wpHG4lKrPAG0y7Q8Q7bJ952J3TTO.jpg"} newsUrl={element.url} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between my-5">
                    {/* &larr and &rarr are used to fet the right and left arrow keys */}
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News