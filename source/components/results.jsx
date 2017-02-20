import React from 'react';
import Result from './result.jsx';

class Results extends React.Component {
  static get propTypes() {
    return {
      results: React.PropTypes.array,
    };
  }

  static get defaultProps() {
    return {
      results: [
        {
          show_title: 'Kill Bill',
          director: 'Quentin Tarantino',
          id: 1,
        },
        {
          show_title: 'Men In Black',
          director: 'Some guy',
          id: 2,
        },
      ],
    };
  }

  constructor(props) {
    super(props);
    this.renderResult = this.renderResult.bind(this);
  }

  onResultSelected(result) {
    console.log("dispatch action for", result);
  }

  renderResult(result, index) {
    return (
      <Result value={result} onClick={this.onResultSelected} key={index}>
        {result.show_title} by {result.director}
      </Result>
    );
  }

  render() {
    return (
      <div>
        {this.props.results.map(this.renderResult)}
      </div>
    );
  }
}

export default Results;
