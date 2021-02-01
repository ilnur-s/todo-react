import React from 'react';
import cn from 'classnames';

const ListItem = ({ task, ...props }) => {
  const isDone = cn('list-group-item', 'list-group-item-action', { 'done': task.done });

  return (
    <li className={isDone} onClick={() => props.onClick()}>
      <input type="checkbox" className="form-check-input me-2" checked={task.done} readOnly/>
      {task.value}
    </li>
  )
};

export default ListItem;
