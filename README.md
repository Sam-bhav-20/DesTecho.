# DesTecho

DesTecho is a full-stack web application inspired by **Dribbble**, designed to showcase creative projects, allowing users to explore, upload, and interact with visual content. The platform features an intuitive UI, real-time data management, and a secure payment gateway for premium content or services.

## Features
- **User Authentication**: Secure user sign-up and login.
- **Upload & Showcase Projects**: Users can upload their work, display it on their profile, and share it with the community.
- **Responsive Design**: Built with Tailwind CSS, Bootstrap, and Material UI to ensure a smooth experience across all devices.
- **Interactive UI**: Users can like, comment, and share their favorite projects.
- **Search & Filter**: Advanced search and filter options to easily find creative work.
- **Payment Gateway**: Integrated payment gateway for premium features or to support creators.
  
## Tech Stack

### Frontend:
- **Bootstrap**: Frontend component library for responsive design.
- **Material UI**: React components for fast and easy UI customization.

### Backend:
- **Node.js**: JavaScript runtime for building the server-side application.
- **Express.js**: Web framework for Node.js to create robust APIs.
- **MongoDB**: NoSQL database for storing user data, projects, and transactions.

### Additional:
- **Payment Gateway**: Integrated for premium content or other services.

## Installation and Setup Instructions

# Prerequisites:
- Node.js
- MongoDB
- NPM/Yarn

# Instructions:
1. Clone the repository:
   git clone https://github.com/Sam-bhav-20/DesTecho..git

2. Navigate to the project directory

3. Install dependencies for the frontend and backend:
   npm install

4. Set up environment variables:
   # Create a .env file in the root directory with the following:
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   PAYMENT_GATEWAY_KEY=your_payment_gateway_key

5. Start the server:
   npm start


# Contribution Guidelines:
# To contribute:
1. Fork the repository.
2. Create a new branch:
   git checkout -b feature-branch
3. Make your changes and commit:
   git commit -m 'Add new feature'
4. Push the branch:
   git push origin feature-branch
5. Open a pull request.
