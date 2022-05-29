import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem';
import Spinner from './Spinner';

export class News extends Component {
    static defaultProps = {
        pageSize: 9,
        country: "in",
        category: "general"

    }
    static propTypes = {
        pageSize: PropTypes.number.isRequired,  //ptsr-propType number required
        country: PropTypes.string.isRequired,   //ptsr-propType string required
        category: PropTypes.string.isRequired   //ptsr-propType string required  

    }

    capitalizeFirstLetter = (string)=> {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
        document.title=`${this.capitalizeFirstLetter(this.props.category)} NewsPedia`
    }

    async updateNews(){
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d5f76180e6e54f42861c6f9fb07fde23&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })

        let data = await fetch(url);
        let parsedData = await data.json()   // to parse data into json
        this.setState({
            totalResults: parsedData.totalResults,
            articles: parsedData.articles,
            loading: false
        })
    } 

    async componentDidMount() {
        this.updateNews()
    }

    handlePrevClick = async () => {
        console.log("Previous");
        this.setState({ page: this.state.page - 1 })
        this.updateNews()

    }

    handleNextClick = async () => {
        console.log("Next");
        this.setState({ page: this.state.page + 1 })
        this.updateNews()
    }



    render() {
        return (
            <div className="container my-3 ">
                <h1 className='text-center my-5'><b>NewsPedia-Top Headlines</b></h1>

                <div className="row">
                    {this.state.loading && <Spinner />}
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4 my-3" key={element.url}>

                            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imgUrl={element.urlToImage ? element.urlToImage : "https://t3.ftcdn.net/jpg/04/84/88/76/360_F_484887682_Mx57wpHG4lKrPAG0y7Q8Q7bJ952J3TTO.jpg"} newsUrl={element.url} author={element.author ? element.author : "Unknown"} date={element.publishedAt ? element.publishedAt : "Updated recently"} source={element.source.name} />
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