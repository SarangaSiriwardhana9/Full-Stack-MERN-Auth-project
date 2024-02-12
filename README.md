# MERN Authentication Project

This is a full-stack authentication project built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. The project includes features like user signup, login, Google OAuth authentication, profile updating (including image upload using Firebase), JWT authentication, and password hashing.

## Features

- User signup with email and password
- User login with email and password
- Google OAuth authentication
- Profile updating including image upload using Firebase storage
- JWT authentication for secure routes
- Password hashing for user security
- Easily customizable and extendable for your own projects

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
```bash
git clone https://github.com/your-username/mern-authentication.git
```
2. Navigate to the project directory:
```bash
cd mern-authentication
```
3. Install dependencies for both the server and client:
```bash
cd server
npm install

cd ../client
npm install
```
3.Set up environment variables:

Create a .env file in the server directory.
Add the following environment variables:
```bash
FIREBASE_API_KEY=your_firebase_api_key
```

## Usage
1.Start the server:
```bash
cd server
npm start
```
2.Start the client:
```bash
cd client
npm run dev
```



**Remember to replace the placeholder values in the `.env.local` and `.env` files with your actual API keys and other sensitive information. Adjust the instructions and details according to your specific setup.**


