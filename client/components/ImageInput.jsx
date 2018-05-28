import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';

/**
 * A react component to accept image input.
 * @param {Object} props The props to pass to this component.
 * @returns {JSX} The ImageInput markup in JSX.
 */
const ImageInput = (props) => {
  if (props.uploading) {  /* When the image is uploading, it displays a spinning icon. */
    return ( /* It displays a spinning icon */
      <div className="d-flex flex-column align-items-center">
        <i className="fa fa-spinner fa-pulse fa-3x"></i>
        <button className="btn btn-disabled mt-3">Sending</button>
      </div>
    );
  } else if (props.image) { /* If an image is selected */
    return ( /* It displays a priview of that image */
      <div className="d-flex flex-column align-items-center">
        <Dropzone
          multiple={false}
          accept="image/jpeg"
          onDrop={props.onDrop}>
          <a href={props.image.preview} target="blank">{props.image.name}</a>
        </Dropzone>
        <button
          className="btn btn-primary mt-3"
          onClick={props.onSend}>Send Image</button>
      </div>
    )
  } else { /* If nothing has been done */
    return (/* It tells the user to select an image */
      <div className="d-flex flex-column align-items-center">
        <Dropzone
          multiple={false}
          accept="image/jpeg"
          onDrop={props.onDrop}>
          <p>Drop an image or click to select an image to upload[.jpeg only]</p>
        </Dropzone>
        <button
          className="btn btn-primary mt-3"
          onClick={props.onSend}>Send Image</button>
      </div>
    );
  }
};

ImageInput.propTypes = {
  image: PropTypes.object,
  uploading: PropTypes.bool.isRequired,
  onDrop: PropTypes.func.isRequired,
  onSend: PropTypes.func.isRequired,
};

ImageInput.defaultProps = {
  uploading: false,
}

export default ImageInput;
