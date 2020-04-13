import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const modalRoot = document.getElementById("root");

class BaseModal extends React.PureComponent {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
  }

  componentDidMount() {
    modalRoot && modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot && modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

BaseModal.propTypes = {
  children: PropTypes.node
};

export { BaseModal };
