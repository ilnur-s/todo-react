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
    newState.push({
      value: value,
      done: false,
    })
    this.setState({ tasks: newState });
  };

  selectAll = () => {
    const newList = this.state.tasks.map(({ value, done }) => {
      return {
        value,
        done: done = true,
      }
    });
    this.setState({ tasks: newList });
  };

  selectItem = (i) => {
    const newState = this.state.tasks.map((item, index) => (i === index) ? { ...item, done: !item.done } : item);
    this.setState({ tasks: newState });
  }

  deleteSelected = () => {
    const newState = this.state.tasks.filter((item) => !item.done);
    this.setState({ tasks: newState});
  }
  
  render() {
    const { tasks } = this.state;
    
    return (
      <div className="container">
        <h1 className="h1 text-center">To Do List</h1>
        <ItemOperation addValue={this.addValue} selectAll={this.selectAll} deleteSelected={this.deleteSelected} />
        <List tasks={tasks} selectItem={this.selectItem} />
      </div>
    )
  }
};
