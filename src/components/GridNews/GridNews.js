import React from 'react';
import GridItem from '../GridItem';
import './GridNews.css';

const GridNews = (props) => {
    var items = props.data.map((d)=> {
        console.log(d)
        return <GridItem item={d} key ={d.id}/>
    })
    
    return (
        <div className='container'>
            <h1>News</h1>
             <div className='grid'>
                 {items}
             </div>
        </div>
    )
}

export default GridNews;