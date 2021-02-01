import React from 'react';
import ListItem from './ListItem.jsx';

const List = ({ tasks }) => {
  return (
    <ol className="list-group">
      { tasks.map((task, index)=>
        <ListItem
          task={task} key={index}
        />)}
    </ol>
  )
};

export default List;
