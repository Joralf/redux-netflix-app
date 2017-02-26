import { connect } from 'react-redux';
import { addFavorite } from '../actions/favorites';
import Results from '../components/common/results.jsx';

const mapStateToProps = (state, ownProps) => {
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
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (obj) => {
      dispatch(addFavorite(obj));
    }
  };
};

const resultListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Results);

export default resultListContainer;
