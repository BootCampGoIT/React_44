import React, { Component, useState } from "react";

const hoc = (WrappedComponent) => (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);

  return <WrappedComponent {...props} isOpen={isOpen} toggle={toggle} />;
};

// const hoc = (WrappedComponent) => {
//   return class WithHigherOrderComponent extends Component {
//     state = {
//       message: "Hello",
//       isOpen: false,
//     };
//     toggle = () => this.setState((prev) => ({ isOpen: !prev.isOpen }));
//     render() {
//       return (
//         <>
//           <button type='button' onClick={this.toggle}>
//             Open {this.props.buttonText}
//           </button>
//           {this.state.isOpen && (
//             <WrappedComponent {...this.props} message={this.state.message} />
//           )}
//         </>
//       );
//     }
//   };
// };

export default hoc;
