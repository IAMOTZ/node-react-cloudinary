import React from 'react';
import ReactDOM from 'react-dom';
import { sendImageToServer } from './helpers';
import { TopNav, ImageInput, Output } from './components';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      image: null,
      imageUrl: null,
      uploading: false,
      error: null,
    }
  }

  /**
   * This method is called immediately a user uploads an image.
   * Though it is called with an array, the user would be able to upload just one image.
   * This is because of the option set in the ImageInput component "multiple={flase}"
   * @param {Array} files An array of all the files uploaded
   */
  handleFileDrop = (files) => {
    this.setState({
      imageUrl: null,
      image: files[0],
    });
  }

  /**
   * This method sends the image to the server.
   * If the server upload is sucessful, it update the state accordingly.
   * If the server upload failed, it update the state and also log the error to console. 
   */
  sendImage = () => {
    if (this.state.image) { /* If there is an actual image */
      const data = new FormData();  /* Create a form data */
      data.append('image', this.state.image); /* Append the image file as "image" */

      this.setState({ uploading: true }); /* Change the uploading state to true */
      
      sendImageToServer(data) /* Send the image to the server */
        .then((response) => { /* If successful */
          this.setState({ /* Update the state with the link to the image and change uploading state to false */
            uploading: false,
            imageUrl: response.data.imageCloudData.url,
          });
        })
        .catch((error) => { /* If there was an error */
          this.setState({ /* Update the state with the error message and change uploading state to false */
            uploading: false,
            error: error.response.data
          });
          console.log(`Error uploading image: ${error.response.data}`);
        });
    } else {  /* If there is no image */
      /* Don't do anything */
    }
  }

  render() {
    return (
      <div>
        <TopNav title="Node-React-Cloudinary" />
        <div className="text-center">
          <ImageInput
            image={this.state.image}
            uploading={this.state.uploading}
            onDrop={this.handleFileDrop}
            onSend={this.sendImage}
          />
          <Output imageUrl={this.state.imageUrl} />
        </div>
      </div>
    );
  }
}

const container = document.getElementById('container');

ReactDOM.render(<App />, container);
