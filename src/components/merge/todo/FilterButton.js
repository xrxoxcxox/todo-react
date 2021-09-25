import React from 'react';
import PropTypes from 'prop-types';
import FilterButtonM from '../../FilterButton';

function FilterButton(props) {
  return <FilterButtonM {...props}/>
}

FilterButton.propTypes = {
  name: PropTypes.string,
  isPressed: PropTypes.bool
}

FilterButton.defaultProps = {
  name: 'Button Name',
  isPressed: false
};

export default FilterButton;
