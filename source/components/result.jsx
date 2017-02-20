import React from 'react';

class Result extends React.Component {
  static get propTypes() {
    return {
      children: React.PropTypes.node.isRequired,
      value: React.PropTypes.object.isRequired,
      onClick: React.PropTypes.func.isRequired,
    };
  }

  constructor(props) {
    super(props);

    this.handleOptionClick = this.handleOptionClick.bind(this);
  }

  handleOptionClick() {
    if (this.props.onClick) {
      this.props.onClick(this.props.value);
    }
  }

  render() {
    return (
      <div onClick={this.handleOptionClick}>
        { this.props.children }
      </div>
    );
  }
}

export default Result;
