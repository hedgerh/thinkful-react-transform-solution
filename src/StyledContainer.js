import React, { PropTypes } from 'react';

const styles = {
  alignItems: 'center',
  display: 'flex',
  flexFlow: 'column wrap'
}

const StyledContainer = (props) => (
  <div style={ styles }>
    { props.children }
  </div>
);

StyledContainer.propTypes = {
  children: PropTypes.node
};

export default StyledContainer;
