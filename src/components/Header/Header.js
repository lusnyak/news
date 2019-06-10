import React, {Component} from 'react';
import './Header.css';

export default class Header extends Component {
    filterAction = (type = 'All')  => {
        this.props.action(type)
    };

    render(){
        return (
            <div className="header">
                <input className="input" type="text" placeholder="Search news"/>
                <button className="button" onClick={()=>this.filterAction('Standard')}>Standard</button>
                <button className="button" onClick={()=>this.filterAction('Hot')}>Hot</button>
                <button className="button" onClick={()=>this.filterAction()}>All</button>
            </div>
        )
    }
}
