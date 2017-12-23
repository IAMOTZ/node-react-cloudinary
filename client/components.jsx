import React from 'react';
import Dropzone from 'react-dropzone';

export const TopNav = (props) => {
  return (
    <nav className="navbar bg-primary mb-5">
      <div className="h5 container text-white justify-content-center">
        {props.title}
      </div>
    </nav>
  );
}

export const ImageInput = (props) => {
  if (props.uploading) {
    return (
      <div className="d-flex flex-column align-items-center">
        <i className="fa fa-spinner fa-pulse fa-3x"></i>
        <button className="btn btn-disabled mt-3">Send Image</button>
      </div>
    );
  } else if (props.image) {
    return (
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
  } else {
    return (
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

export const Output = (props) => {
  if (props.imageUrl) {
    return (
      <div className="mt-3">
        <p className="d5">Image uploaded!</p>
        <div>
          <span className="h4">Url:</span>&nbsp;
          <a href={props.imageUrl}>{props.imageUrl}</a>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
