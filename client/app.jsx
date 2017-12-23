import React from 'react';
import ReactDOM from 'react-dom';
import { sendImageToServer } from './helpers';
import { TopNav, ImageInput, Output } from './components.jsx';

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

  // This method is called whenever the user uploads an image
  handleFileDrop = (files) => {
    this.setState({
      imageUrl: null,
      image: files[0],
    });
  }

  // This method sends the uploaded image to the server
  sendImage = () => {
    if (this.state.image) {
      const data = new FormData();
      data.append('image', this.state.image);

      this.setState({ uploading: true });
      
      sendImageToServer(data)
        .then((response) => {
          this.setState({
            uploading: false,
            imageUrl: response.data.imageCloudData.url,
          });
        })
        .catch((error) => {
          this.setState({
            uploading: false,
            error: error.response.data
          });
        });
    } else {
      // Don't do anything when the user has not upload an image
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
