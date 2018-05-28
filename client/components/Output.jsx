import React from 'react';
import PropTypes from 'prop-types';

/**
 * Displays the output after uploading an image.
 * It simply displays a text and a link to the uploaded image.
 * @param {Object} props The props to pass to this component.
 * @return {JSX} The Output markup in JSX.
 */
const Output = (props) => {
  if (props.imageUrl) { /* If the image URL is passed as props */
    return ( /* It displays the link to that image */
      <div className="mt-3">
        <p className="d5">Image uploaded!</p>
        <div>
          <span className="h4">Url:</span>&nbsp;
          <a href={props.imageUrl} target="blank">{props.imageUrl}</a>
        </div>
      </div>
    );
  } else { /* If there is no image URL */
    return null; /* It displays nothing */
  }
}

Output.propTypes = { imageUrl: PropTypes.string };

export default Output;
