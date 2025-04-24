# Freelancer App

![License](https://img.shields.io/badge/License-MIT-blue.svg)

A modern React-based freelancing platform that connects freelancers with clients.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Demo](#demo)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the App](#running-the-app)
- [Available Scripts](#available-scripts)
- [Testing](#testing)
- [Deployment](#deployment)
- [Security Considerations](#security-considerations)
- [Performance Optimization](#performance-optimization)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Description

Freelancer App is a modern web application built with React, TypeScript, and Vite. It connects project owners with freelancers, allowing owners to post jobs and manage proposals. The app features role-based dashboards, token-based authentication with refresh, and smooth server-state handling.

## Features

- User authentication and authorization
- Project posting and bidding system
- User profiles for freelancers and clients
- Project management dashboard
- Real-time messaging system
- Payment integration
- Search and filter functionality

## Demo

_(Include a GIF or link to a live demo here)_

## Tech Stack

- **Framework**: React.js
- **Language**: TypeScript
- **Styling**: Material-UI
- **Routing**: React Router
- **State Management**: Redux
- **HTTP Client**: Axios
- **Backend Services**: Firebase

## Architecture

```
├── Components/
│   ├── Common/           # Reusable components
│   ├── Layout/           # Layout components
│   └── Features/         # Feature-specific components
├── Hooks/                # Custom React hooks
├── Context/              # React context providers
├── Services/             # API and third-party services
├── Utils/                # Helper functions and constants
└── Types/                # TypeScript type definitions
```

## Project Structure

```
freelancer-app/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── redux/
│   ├── services/
│   ├── utils/
│   └── App.js
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/freelancer-app.git
```

2. Install dependencies:
```bash
cd freelancer-app
npm install
```

3. Run the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`.

### Environment Variables

By default, the app uses `http://localhost:5000/api` as the backend. To change this, you can set a VITE_API_BASE_URL in an `.env` file:

```env
VITE_API_BASE_URL=https://api.example.com
```

Then update `src/services/httpService.ts` to use `import.meta.env.VITE_API_BASE_URL` instead of the hardcoded URL.

### Running the App

```bash
npm run dev
```

Open your browser at `http://localhost:3000`.

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm build`: Builds the app for production
- `npm test`: Runs the test suite
- `npm eject`: Ejects from Create React App
- `npm run dev`: Start development server
- `npm run preview`: Preview production build
- `npm run lint`: Run ESLint checks

## Testing

```bash
# Run unit tests
npm run test:unit

# Run integration tests
npm run test:integration

# Run e2e tests
npm run test:e2e

# Generate coverage report
npm run test:coverage
```

## Deployment

### Production Build
```bash
npm run build
```

### Docker Deployment
```bash
# Build Docker image
docker build -t freelancer-app .

# Run Docker container
docker run -p 80:80 freelancer-app
```

## Security Considerations

- JWT token-based authentication
- Password hashing with bcrypt
- Rate limiting on API endpoints
- XSS protection
- CSRF protection
- Secure HTTP headers

## Performance Optimization

- Code splitting and lazy loading
- Image optimization
- Caching strategies
- Bundle size optimization
- Server-side rendering support

## Troubleshooting

Common issues and their solutions:

1. **Installation Issues**
   - Clear npm cache: `npm cache clean --force`
   - Delete node_modules: `rm -rf node_modules`

2. **Build Issues**
   - Check Node.js version
   - Verify environment variables

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Amir Hossein Rahmati - amirrahmati471@gmail.com

Project Link: https://github.com/AmirRaZz/freelancer-app