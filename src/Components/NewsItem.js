import React from 'react'

const NewsItem = (props)=> {
        // let {title, description, imageUrl, newsUrl} = props; can use this too, then no need to add "this.props." before every prop. 
        return (
            <div className="my-3">
                <div className="card">
                    <img src={!props.imageUrl?"https://images.hindustantimes.com/tech/img/2021/10/30/1600x900/8f7c53addfd04ae392960c1b03521026-8f7c53addfd04ae392960c1b03521026-1_1626676609218_1635618448189.jpg":props.imageUrl} className="card-img-top" alt="..." />
                    <div className ="card-body">
                    <h5 className ="card-title">{props.title}...</h5>
                    <p className ="card-text">{props.description}...</p>
                    <p className='card-text'><small className="text-muted">By {props.author} on {new Date(props.date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={props.newsUrl} target="_blank" className ="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
}

export default NewsItem