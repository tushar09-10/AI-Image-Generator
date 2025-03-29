import React from 'react';

export default function AboutPage() {
  return (
    <div className="container mx-auto ">
      <div className="max-w-4xl mx-auto  border border-gray-200 rounded-lg p-4 sm:p-8 shadow-sm">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          About My AI Image Generator
        </h2>
        <div className="space-y-4 text-gray-600">
          <p>
            Hey there! I've built this AI image generator app using cutting-edge technologies. Here's a quick rundown of what's under the hood:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              <strong>AI Model:</strong> Stability AI's Stable Diffusion XL 1.0 via Hugging Face API
            </li>
            <li>
              <strong>Tech Stack:</strong> MERN (MongoDB, Express.js, React, Node.js)
            </li>
            <li>
              <strong>Image Storage:</strong> Cloudinary
            </li>
            <li>
              <strong>Database:</strong> MongoDB for storing post metadata
            </li>
            <li>
              <strong>API Integration:</strong> OpenAI API for additional AI capabilities
            </li>
            <li>
              <strong>Styling:</strong> Tailwind CSS
            </li>
          </ul>
          <p>
            Key Features:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Text-to-image generation using state-of-the-art AI</li>
            <li>Community-driven image gallery</li>
            <li>Secure image upload and sharing</li>
            <li>Responsive design for mobile and desktop</li>
          </ul>
          <p>
            Technical Highlights:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>RESTful API architecture</li>
            <li>Asynchronous image generation and upload</li>
            <li>Error handling for API requests</li>
            <li>Base64 encoding for image data transfer</li>
            <li>Environment variable management with dotenv</li>
          </ul>
          <p className="mt-4">
            I built this app to explore the possibilities of AI in creative applications. It showcases the integration of various technologies to create a seamless user experience for AI-powered image generation and sharing.
          </p>
        </div>
      </div>
    </div>
  );
}