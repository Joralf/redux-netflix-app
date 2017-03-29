import React from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };

    this.onHandleChange = this.onHandleChange.bind(this);
  }

  onHandleChange(e) {
    const queryString = e.target.value;
    console.log("calling click handler with", queryString);
    this.setState({ value: queryString });
    if (queryString.length > 5) {
      this.props.onHandleChange(queryString);
    }
  }

  render() {
    return (
      <form>
        <FormGroup
          controlId="formBasicText"
        >
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Search for movie, director, actor etc."
            onChange={this.onHandleChange}
          />
          <FormControl.Feedback />
        </FormGroup>
      </form>
    );
  }
}

Search.propTypes = {
  onHandleChange: React.PropTypes.func.isRequired,
};

export default Search;
