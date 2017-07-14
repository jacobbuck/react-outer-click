import PropTypes from "prop-types";
import React from "react";
import { findDOMNode } from "react-dom";

class OuterClick extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    onOuterClick: PropTypes.func.isRequired,
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside, true);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside, true);
  }

  handleClickOutside = event => {
    const node = findDOMNode(this);

    if (node && node !== event.target && !node.contains(event.target)) {
      this.props.onOuterClick(event);
    }
  };

  render() {
    return React.Children.only(this.props.children);
  }
}

export default OuterClick;
