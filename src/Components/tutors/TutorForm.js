import React, { Component } from "react";
import { toDataURL } from "../../helpers/imgToBase64";
import sprite from "../../icons/courses/sprite.svg";

const levels = ["junior", "middle", "senior"];

const initialState = {
  avatar: "",
  name: "",
  level: levels[0],
};

class TutorForm extends Component {
  state = { ...initialState };
  onHandleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "file") {
      toDataURL(e.target).then((avatar) => this.setState({ [name]: avatar }));
      return;
    }
    this.setState({ [name]: value });
  };
  onHandleSubmit = (e) => {
    e.preventDefault();
    this.props.addTutor(this.state);
  };

  render() {
    return (
      <form onSubmit={this.onHandleSubmit}>
        <label className='tutorFormAvatarLabel'>
          {this.state.avatar ? (
            <img src={this.state.avatar} alt={this.state.name} />
          ) : (
            <svg className='tutorFormAvatarIcon'>
              <use href={sprite + "#icon-camera"} />
            </svg>
          )}
          <input
            type='file'
            onChange={this.onHandleChange}
            name='avatar'
            className='tutorFormAvatarInput'
          />
        </label>
        <label>
          Name
          <input
            type='text'
            name='name'
            value={this.state.name}
            onChange={this.onHandleChange}
          />
        </label>
        <label>
          Level
          <select
            name='level'
            value={this.state.level}
            onChange={this.onHandleChange}>
            {levels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </label>
        <button type='submit'>Add tutor</button>
      </form>
    );
  }
}

export default TutorForm;
