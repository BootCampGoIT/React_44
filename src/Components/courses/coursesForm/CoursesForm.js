import React, { Component } from "react";
import { CourseFormContainer } from "./CoursesFormStyled";
import sprite from "../../../icons/courses/sprite.svg";
import { toDataURL } from "../../../helpers/imgToBase64";

const mentors = ["Alex Ivanov", "Igor Petrov"];

const initialState = {
  avatar: "",
  courseName: "",
  duration: "",
  isActive: false,
};

class CoursesForm extends Component {
  state = {
    ...initialState,
    tutor: this.props.tutors[0] || "No tutor",
    mentor: mentors[0] || "No mentor",
  };

  onHandleChange = (e) => {
    const { type, value, name } = e.target;
    if (type === "radio") {
      this.setState((prev) => ({ [name]: !prev[name] }));
      return;
    }
    if (type === "file") {
      toDataURL(e.target).then((avatar) => this.setState({ [name]: avatar }));
      return;
    }
    this.setState({ [name]: value });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    this.props.addCourse(this.state);
    this.setState({
      ...initialState,
      tutor: this.props.tutors[0] || "No tutor",
      mentor: mentors[0] || "No mentor",
    });
  };
  render() {
    return (
      <CourseFormContainer onSubmit={this.onHandleSubmit}>
        <label className='courseFormAvatarLabel'>
          {this.state.avatar ? (
            <img src={this.state.avatar} alt={this.state.courseName} />
          ) : (
            <svg className='courseFormAvatarIcon'>
              <use href={sprite + "#icon-camera"} />
            </svg>
          )}
          <input
            id='dfghjk'
            type='file'
            onChange={this.onHandleChange}
            name='avatar'
            className='courseFormAvatarInput'
          />
        </label>

        <label>
          Name
          <input
            type='text'
            onChange={this.onHandleChange}
            value={this.state.courseName}
            name='courseName'
          />
        </label>
        <label>
          Duration
          <input
            type='text'
            onChange={this.onHandleChange}
            value={this.state.duration}
            name='duration'
          />
        </label>
        <div>
          Is active
          <label>
            True
            <input
              type='radio'
              onChange={this.onHandleChange}
              name='isActive'
              checked={this.state.isActive}
            />
          </label>
          <label>
            False
            <input
              type='radio'
              onChange={this.onHandleChange}
              name='isActive'
              checked={!this.state.isActive}
            />
          </label>
          <label>
            Tutor
            <select
              onChange={this.onHandleChange}
              name='tutor'
              value={this.state.tutor}>
              {this.props.tutors.map((tutor) => (
                <option key={tutor.id} value={tutor.name}>
                  {tutor.name}
                </option>
              ))}
            </select>
          </label>
          <label>
            Mentor
            <select
              onChange={this.onHandleChange}
              name='mentor'
              value={this.state.mentor}>
              {mentors.map((mentor) => (
                <option key={mentor} value={mentor}>
                  {mentor}
                </option>
              ))}
            </select>
          </label>
        </div>
        <button type='submit'>Add course</button>
      </CourseFormContainer>
    );
  }
}

export default CoursesForm;

// const obj = {
//   "x": 10,
// };

// console.log(obj.x)
// console.log(obj["x"])
