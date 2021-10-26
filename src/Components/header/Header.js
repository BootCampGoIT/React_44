import React, { Component } from "react";
import { HeaderContainer } from "./HeaderStyled";
import Navigation from "./navigation/Navigation";
import sprite from "../../icons/header/sprite.svg";
import Modal from "../modal/Modal";
import { mainRoutes } from "../../routes/mainRoutes";
import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher";

class Header extends Component {
  state = {
    isModalOpen: false,
    breakpoint: 768,
    width: window.innerWidth,
  };
  componentDidMount() {
    window.addEventListener("resize", this.windowResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.windowResize);
  }

  windowResize = () => this.setState({ width: window.innerWidth });

  toggle = () => {
    this.setState((prev) => ({
      isModalOpen: !prev.isModalOpen,
    }));
  };

  render() {
    const { changeTheme } = this.props;
    return (
      <HeaderContainer>
        <h2 className='headerTitle'>IT-education</h2>
        {this.state.width >= this.state.breakpoint ? (
          <>
            {this.state.isModalOpen && (
              <Modal toggle={this.toggle}>
                <div className='settingsWrapper'>
                  <h2>Settings</h2>
                  <button type='button' onClick={changeTheme}>
                    Change theme
                  </button>
                <LanguageSwitcher />
                </div>
              </Modal>
            )}
            <div className='headerBlock'>
              <Navigation routes={mainRoutes} />
              <button
                type='button'
                className='headerBlockButton'
                onClick={this.toggle}>
                <svg className='headerBlockIcon'>
                  <use href={sprite + "#icon-dots-three-vertical"} />
                </svg>
              </button>
            </div>
          </>
        ) : (
          <svg className='headerMenuIcon'>
            <use href={sprite + "#icon-menu"} />
          </svg>
        )}
      </HeaderContainer>
    );
  }
}

export default Header;

// const Header = () => {
//   return (

//   );
// };

// export default Header;

// const x = {
//   name: "alex",
//   getName(){
//     console.log(this.name)
//   }
// }

// const y = Object.create(x);
// y.name = "Nikita"
// console.log(y.name);

// y.getName()

// const fn = () => {
//   const x = 5;
// };
// fn();

// function getName(a) {
//   console.log(this.name);
// }

// getName.hello = function () {
//   console.log("HEllo");
// };

// getName.hello();
// console.dir(getName);

// const x = {
//   name: "alex",
// };

// getName.call(x, 5);
// getName.apply(x, [5]);

// const func = getName.bind(x, 5);
// func();
