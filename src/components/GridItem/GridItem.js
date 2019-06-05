import React from 'react';
import './GridItem.css';

const GridItem = (props) => {
    const st = () => {
        if (props.item.type == 'Hot') {
            return "gridHotItem"
        } else {
            return "gridItem"
        }
       
    }
    return (
        <div className={st()}> 
            <h3>{props.item.title}</h3>
            <p>{props.item.description}</p>
            <div>
                <button>Hot</button>
                <button>Standard</button>
            </div>
        </div>
    )
}

export default GridItem;