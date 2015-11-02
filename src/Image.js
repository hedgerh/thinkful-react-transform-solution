import React, { PropTypes } from 'react';

const styles = {
  alignItems: 'center',
  border: '1px solid #ccc',
  display: 'flex',
  flexFlow: 'column wrap',
  height: '250px',
  justifyContent: 'center',
  marginBottom: '32px',
  width: '400px'
};

const Image = ({ height, src, width }) => (
  <div style={ styles }>
    <img src={ src } width='368px' height='218px'/>
  </div>
);

Image.propTypes={
  height: PropTypes.string,
  src: PropTypes.string,
  width: PropTypes.string
};

export default Image;