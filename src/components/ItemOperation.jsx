import React from 'react';

export default class ItemOperation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleClick = () => {
    this.props.addValue(this.state.value);
    this.setState({
      value: '',
    });
  };

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  render() {
    const changedValue = this.state.value;

    return (
      <React.Fragment>
        <div className="input-group mb-3">
          <input className="text form-control" placeholder="Добавьте задачу" value={changedValue} onChange={this.handleChange} />
          <button className="btn btn-primary add-task" type="button" onClick={this.handleClick}>Добавить</button>
        </div>
        <div className="row mx-0 mb-3">
            <button type="button" className="col-6 btn btn-block btn-info select-all">Выделить всё</button>
            <button type="button" className="col-6 btn-block btn-danger delete-selection">Удалить выделенное</button>
        </div>
      </React.Fragment>
    )
  };
};