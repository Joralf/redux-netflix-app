import React from 'react';
import { connect } from 'react-redux';
import { FormGroup, FormControl } from 'react-bootstrap';
import { fetchMovies } from '../../actions/search';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    // dispatch(fetchMovies(e.target.value));
    this.setState({ value: e.target.value });
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
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>
      </form>
    );
  }
}

export default connect()(Search);
