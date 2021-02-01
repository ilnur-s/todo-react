import React from 'react';
import ListItem from './ListItem.jsx';

const List = ({ tasks, ...props }) => {
  return (
    <ol className="list-group">
      {tasks.map((task, index)=>
        <ListItem
          task={task} key={index} onClick={() => props.selectItem(index)}
        />)}
    </ol>
  );
};

export default List;
