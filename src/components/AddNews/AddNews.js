import React, {Component} from 'react';
import './AddNews.css';

export default class AddNews extends Component {
    render(){
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
}

