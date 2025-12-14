# AI Image Generator App

Welcome to my AI Image Generator App! This project combines the power of AI with a user-friendly interface to create and share unique images.


## Features

- Generate images from text prompts using AI
- Explore a community gallery of AI-generated images
- Share your creations with the community
- Responsive design for both desktop and mobile use

## Tech Stack

- **Frontend**: React with Vite
- **Backend**: Node.js with Express
- **Database**: MongoDB
- **AI Model**: Stability AI's Stable Diffusion XL 1.0 via Hugging Face API
- **Image Storage**: Cloudinary
- **Authentication**: JWT (JSON Web Tokens)
- **Styling**: Tailwind CSS

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or later)
- npm or yarn
- MongoDB

## Environment Variables

You'll need to set up the following environment variables:

MONGODB_URL=your_mongodb_connection_string
OPENAI_API_KEY=your_openai_api_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
HUGGING_FACE_API=your_hugging_face_api_key


## Installation

1. Clone the repository
2. Install backend dependencies:
3. Install frontend dependencies:

## Running the App

1. Start the backend server:

cd server
node index.js


2. In a new terminal, start the frontend:

cd client
npm run dev


3. Open your browser and navigate to `http://localhost:5173` (or the port Vite is running on)

## API Endpoints

- `GET /api/v1/post`: Fetch all posts
- `POST /api/v1/post`: Create a new post
- `POST /api/v1/dalle`: Generate an image from a prompt

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Acknowledgements

- OpenAI for their groundbreaking work in AI
- Stability AI for the Stable Diffusion model
- Hugging Face for providing easy access to AI models
- The MERN stack community for excellent documentation and resources


Happy image generating!
