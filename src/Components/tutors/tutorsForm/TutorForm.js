import React, { Component } from "react";
import { toDataURL } from "../../../helpers/imgToBase64";
import sprite from "../../../icons/courses/sprite.svg";
import { TutorFormContainer } from "./TutorFormStyled";

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
    this.props.toggle();
  };

  render() {
    return (
      <TutorFormContainer onSubmit={this.onHandleSubmit}>
        <label className='tutorFormAvatarLabel'>
          <div className='tutorFormAvatarContainer'>
            {this.state.avatar ? (
              <img
                src={this.state.avatar}
                alt={this.state.name}
                className='tutorFormAvatarImage'
              />
            ) : (
              <svg className='tutorFormAvatarIcon'>
                <use href={sprite + "#icon-camera"} />
              </svg>
            )}
          </div>
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
        <button type='submit' className='tutorFormSubmitButton'>
          Add tutor
        </button>
      </TutorFormContainer>
    );
  }
}

export default TutorForm;
