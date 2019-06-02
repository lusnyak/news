import React from 'react';
import GridItem from './GridItem';
import './Grid.css';

const GridNews = () => {
    let data = [
        {key: 0, title: "hello world",  description: "This is a description "},
        {key: 1, title: "hello world 1",  description: "This is a description 1"},
        {key: 2, title: "hello world 2",  description: "This is a description 2"},
        {key: 3, title: "hello world 3",  description: "This is a description 3"}
    ]

    var items = data.map((d)=> {
        console.log(d)
        return <GridItem item={d} key ={d.key}/>
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