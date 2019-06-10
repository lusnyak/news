import React, {Component} from 'react';
import './GridNews.css';
import Grid from '../Grid';

export default class GridNews extends Component {
    renderItem = ({title, description, type, id}) => {
        let containerStyle = type === 'Hot' ? "gridHotItem" : "gridItem"
        return (
            <div className={containerStyle} key={id}> 
                <h3>{title}</h3>
                <p>{description}</p>
                <div>
                    <button>Hot</button>
                    <button>Standard</button>
                </div>
            </div>
        )
    }

    render(){
        return (
            <div className='container'>
                <h1>News</h1>
                <Grid
                    item={this.renderItem}
                    data={this.props.data}
                />
            </div>
        )
    }
}

