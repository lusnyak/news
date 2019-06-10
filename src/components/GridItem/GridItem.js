import React, {Component} from 'react';
import './GridItem.css';

export default class GridItem extends Component {
    render(){
        let containerStyle = this.props.item.type == 'Hot' ? "gridHotItem" : "gridItem"
        return (
            <div className={containerStyle}> 
                <h3>{this.props.item.title}</h3>
                <p>{this.props.item.description}</p>
                <div>
                    <button>Hot</button>
                    <button>Standard</button>
                </div>
            </div>
        )
    }
}
