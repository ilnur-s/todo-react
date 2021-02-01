import React from 'react';

class ItemOperation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleAdd = () => {
    if (this.state.value) {
      this.props.addValue(this.state.value);
      this.setState({
        value: '',
      });
    }
  };

  handleKeyUp = (event) => {
    if (this.state.value && event.keyCode === 13) {
      this.props.addValue(this.state.value);
      this.setState({
        value: '',
      });
    }
  };

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  handleSelectAll = () => this.props.selectAll();

  render() {
    const changedValue = this.state.value;

    return (
      <React.Fragment>
        <div className="input-group mb-3">
          <input className="text form-control" placeholder="Добавьте задачу" value={changedValue} onChange={this.handleChange} onKeyUp={this.handleKeyUp}/>
          <button className="btn btn-primary add-task" type="button" onClick={this.handleAdd}>Добавить</button>
        </div>
        <div className="row mx-0 mb-3">
            <button type="button" className="col-6 btn btn-block btn-info select-all" onClick={this.handleSelectAll}>Выделить всё</button>
            <button type="button" className="col-6 btn-block btn-danger delete-selection" onClick={() => this.props.deleteSelected()}>Удалить выделенное</button>
        </div>
      </React.Fragment>
    );
  };
};

export default ItemOperation;
