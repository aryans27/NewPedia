import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imgUrl, newsUrl, author, date, source } = this.props

        return (
            <div className="card" style={{ width: "18rem" }}>
                <img src={imgUrl} className="card-img-top" alt="..." />
                {/* badge, and to make it appear above, we use z-index*/}
                <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%', zIndex: '1'}}> {source}</span>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small class="text-muted">By: {author} on {new Date(date).toGMTString()}</small></p>

                    {/* nonreferer is used to resolve warning over opening article into next page */}
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark">Read More</a>
                </div>
            </div>
        )
    }
}

export default NewsItem