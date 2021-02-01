import React from 'react';
import ItemOperation from './components/ItemOperation.jsx';
import List from './components/List.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
  }

  addValue = (value) => {
    const newState = this.state.tasks;
    console.log(newState);
    newState.push({
      text: value,
      done: false,
    })
    this.setState({ tasks: newState });
  }
  
  render() {
    const { tasks } = this.state;
    
    return (
      <div className="container">
        <h1 className="h1 text-center">To Do list</h1>
        <ItemOperation addValue={this.addValue} />
        <List tasks={tasks}/>
      </div>
    )
  }
};