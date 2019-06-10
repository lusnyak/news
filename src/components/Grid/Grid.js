import React, {Component} from 'react';
import './Grid.css';

export default class Grid extends Component{

    renderItems() {
        let items = this.props.data.map((d)=> {
            return this.props.item(d)
        })
        return items
    }

    render(){
        return (
            <div className='grid'>
             {this.renderItems()}
            </div>             
        )
    }
}