import React from 'react';
import cn from 'classnames';

const ListItem = ({ task }) => {
  const isDone = cn('list-group-item', 'list-group-item-action', { 'done': task.done });

  return (
    <li className={isDone}>
      <input type="checkbox" className="form-check-input me-2"/>
      {task.text}
    </li>
  )
};

export default ListItem;
