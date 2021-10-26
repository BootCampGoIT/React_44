import React, { Component } from "react";
import { toDataURL } from "../../../helpers/imgToBase64";
import sprite from "../../../icons/courses/sprite.svg";
import { LanguageContext } from "../../App";
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
    if (this.props.isTutorExist(this.state.name)) {
      alert(`Tutor with name ${this.state.name} already exist!`);
    } else {
      this.props.addTutor(this.state);
      this.props.toggle();
    }
  };

  render() {
    return (
      <LanguageContext.Consumer>
        {({ set }) => (
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
              {set.tutorForm["name"]}
              <input
                type='text'
                name='name'
                value={this.state.name}
                onChange={this.onHandleChange}
              />
            </label>
            <label>
              {set.tutorForm["level"]}
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
              {set.tutorForm["buttonText"]}
            </button>
          </TutorFormContainer>
        )}
      </LanguageContext.Consumer>
    );
  }
}

export default TutorForm;
