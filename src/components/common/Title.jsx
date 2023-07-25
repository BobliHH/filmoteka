import PropTypes from 'prop-types';
export const Title = ({ title, tag }) => {
  if (tag === 'h1') {
    return <h1>{title}</h1>;
  }
  if (tag === 'h2') {
    return <h2>{title}</h2>;
  }
  if (tag === 'h3') {
    return <h3>{title}</h3>;
  }
  if (tag === 'h4') {
    return <h4>{title}</h4>;
  }
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4']).isRequired,
};
