import React from 'react';
import PropTypes from 'prop-types';

/**
 * A simple Top Navigation react component.
 * @param {Object} props The props to pass to this component.
 * @return {JSX} The Top Navigation markup in JSX
 */
const TopNav = (props) => {
  return (
    <nav className="navbar bg-primary mb-5">
      <div className="h5 container text-white justify-content-center">
        {props.title}
      </div>
    </nav>
  );
}

TopNav.propTypes = { title: PropTypes.string.isRequired };

export default TopNav;
