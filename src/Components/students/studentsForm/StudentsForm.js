import React, { Component } from "react";

class StudentsForm extends Component {
  state = {
    name: "",
    course: "",
    age: "",
  };

  onHandleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    this.props.addStudent(this.state);
  };
  
  render() {
    return (
      <form onSubmit={this.onHandleSubmit}>
        <label>
          Name
          <input
            type='text'
            value={this.state.name}
            name='name'
            onChange={this.onHandleChange}
          />
        </label>
        <label>
          Course
          <input
            type='text'
            value={this.state.course}
            name='course'
            onChange={this.onHandleChange}
          />
        </label>
        <label>
          Age
          <input
            type='text'
            value={this.state.age}
            name='age'
            onChange={this.onHandleChange}
          />
        </label>
        <button type='submit'>Add Student</button>
      </form>
    );
  }
}

export default StudentsForm;
