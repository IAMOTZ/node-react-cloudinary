import React from 'react';
import ReactDOM from 'react-dom';
import Dropzone from 'react-dropzone';
import { sendImageToServer } from './helpers';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      image: null,
      imageName: null,
      imagePreview: null,
      imageUrl: null,
      error: null,
    }
  }

  // This method is called whenever the user uploads an image
  handleFileDrop = (files) => {
    this.setState({
      image: files[0],
      imageName: files[0].name,
      imagePreview: files[0].preview
    });
  }

  // This method sends the uploaded image to the server
  sendImage = () => {
    if (this.state.image) {
      const data = new FormData();
      data.append('image', this.state.image);
      sendImageToServer(data)
        .then((response) => {
          this.setState({
            imageUrl: response.data.imageUrl
          });
        })
        .catch((error) => {
          this.setState({
            error: error.response.data
          });
        });
    } else {
      // Don't do anything when the user has not upload an image
    }
  }

  render() {
    if (!this.state.imageUrl) {
      return (
        <div>
          <Dropzone
            multiple={false}
            onDrop={this.handleFileDrop}
            accept="image/jpeg">
            {
              this.state.image ?
                <a href={this.state.imagePreview} target="blank">{this.state.imageName}</a> :
                <p>Drag and Drop an image or click here to select an image[.jpeg only]</p>
            }
          </Dropzone>
          <button onClick={this.sendImage}>Send to server</button>
        </div>
      );
    } else {
      return (
        <div>
          <p>Image uplooaded</p>
          <p>Url: {this.state.imageUrl}</p>
        </div>
      );
    }
  }
}

const container = document.getElementById('container');

ReactDOM.render(<App />, container);
