# Node-React-Cloudinary
This is a simple web application to explain how to upload images to cloudinary from the server part of an application. This application uses [Node](https://nodejs.org/en/) for the server and [React](https://reactjs.org/) for the client.


## Why uploading images from the server?
You can actually upload an image to cloudinary from the client part of your application, but doing it from the server is better if you consider the following:  

- Server-side validations: Most times, you would want to validate some information before performing an image upload. For example, when a user is creating a profile, you would want to validate the user details from the server(never trust client-side validation!) before uploading the profile image.  
- Security: As of when this project is created, uploading images to cloudinary from the client part of an application is less secure. A malicious user can go into your source code, duplicate you upload configuration, use it to upload all sort of stupid and dirty images to your cloud.
More details on client-upload security [here](https://support.cloudinary.com/hc/en-us/articles/208335975-How-safe-secure-is-it-to-use-unsigned-upload-from-web-browsers-or-mobile-clients-). 


## Why is it challenging?
Uploading an image to cloudinary from the client side of an application is pretty easy and there is a very good [documentation](https://cloudinary.com/blog/direct_upload_made_easy_from_browser_or_mobile_app_to_the_cloud) on how to do that. However, uploading from the server can be really challenging and that is because you are not just uploading the image alone, you have to think about all of these:  

- How does the image get to the server
- How to handle image(files) in the server
- The actual upload itself

## Why study with this repo?
- This application is fully functional, as soon as you clone it and configure the cloudinary SDK, you can start experimenting with it straight away.
- All the logic used in this application is very well explained with inline/block comments.


## Getting Started
These instructions would get you a copy of this project up and running on your local machine.

#### Prerequisite
- Git
- Node

#### Installation
- Clone this git repository `$ git clone https://github.com/IAMOTZ/node-react-cloudinary.git`
- Change into the directory of the project
- Use `$ npm install` to install all required dependency packages.
- Create a `.env` file in the root folder to provide all the needed environment variables as specified in `.env.example`
- Run `npm start` to start the application
- Run `npm run server:dev` to start the server for development
- Run `npm run client:dev` to start `webpack-dev-server` for client development(make sure to start the server first)

## Contributing
The aim of this project is to ensure that uploading images from the server is a breeze. Any form of contribution that aligns with this goal would be highly appreciated.  
To contribute to this project:  

- Fork the repository.
- Create a new branch for your contribution
- Commits your changes with detailed commit messages
- Raise a pull request against the master branch 

#### Any other form of contribution is also allowed, as long as it makes this project get better.

## Feedback
- Your feedback can make this project a lot better. If you figure out that something is not working correctly, something can be done better, or just anything, make sure to reach out here: ogunniyitunmise@gmail.com

## Useful links
- [Cloudinary](https://cloudinary.com/)
- [React Dropzozne](https://github.com/react-dropzone/react-dropzone)
- [Multer](https://github.com/expressjs/multer)

## Author
* **Ogunniyi Tunmise**


