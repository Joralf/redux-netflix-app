import React from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';

class Search extends React.Component {
  render() {
    return (
      <form>
        <FormGroup
          controlId="formBasicText"
        >
          <FormControl
            type="text"
            value=""
            placeholder="Search for movie, director, actor etc."
          />
          <FormControl.Feedback />
        </FormGroup>
      </form>
    );
  }
}

export default Search;
