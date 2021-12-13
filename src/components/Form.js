import React, { Component } from "react";

import ToDoList from "./ToDoList";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      items: [],
    };
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: "",
      items: [...this.state.items, this.state.term],
    });
  };

  render() {
    return (
      <div>
        <form className="App" onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Submit</button>
        </form>
        <ToDoList items={this.state.items} />
      </div>
    );
  }
}
