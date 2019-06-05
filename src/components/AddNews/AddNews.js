import React from 'react';
import './AddNews.css';

const AddNews = (props) => {
    
    return (
        <div className="container">
            <h1>Add News</h1>
            <div className="addForm">
            <input className="input" type="text" placeholder="News title"/>
            <textarea className="textArea" placeholder="News description"/>
            <button className="button">Add News</button>
            </div>
        </div>
    )
}

export default AddNews;