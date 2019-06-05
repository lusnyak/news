import React, {Component} from 'react';
import './App.css';

import Header from '../Header';
import GridNews from '../GridNews';
import AddNews from '../AddNews';

var jsonData = [
  {id: 0, title: "hello world",  description: "This is a description ", type: 'Standard'},
  {id: 1, title: "hello world 1",  description: "This is a description 1", type: 'Hot'},
  {id: 2, title: "hello world 2",  description: "This is a description 2", type: 'Hot'},
  {id: 3, title: "hello world 3",  description: "This is a description 3", type: 'Standard'},
  {id: 4, title: "hello world 4",  description: "This is a description 4", type: 'Hot'},
  {id: 5, title: "hello world 5",  description: "This is a description 5", type: 'Standard'}
]

export default class App extends Component {
  state = {
    data: jsonData,
    filtredData: jsonData,
  }

  filterAction = (type) => {
    let fData = []
    if (type != 'All') {
      fData = this.state.data.filter((el)=>{
        return el.type == type
      })
    } else {
      fData = this.state.data
    }

    this.setState({filtredData:fData})
  }
  
  render() {
    let {filtredData} = this.state
    return (
      <div className="app">
        <Header action={(t)=>this.filterAction(t)}/>
        <GridNews data={filtredData}/>
        <AddNews />
      </div>
    );
  }
}
