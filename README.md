# Freelancer App

![License](https://img.shields.io/badge/License-MIT-blue.svg)

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Demo](#demo)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the App](#running-the-app)
- [Available Scripts](#available-scripts)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Description

Freelancer App is a modern web application built with React, TypeScript, and Vite. It connects project owners with freelancers, allowing owners to post jobs and manage proposals. The app features role-based dashboards, token-based authentication with refresh, and smooth server-state handling.

## Features

- User authentication (sign up, log in, token refresh)
- Role-based access control: Owner & Freelancer
- Owner Dashboard: Post new projects, edit and manage existing ones, view project statistics
- Freelancer Dashboard: Browse available projects, submit proposals, and track submissions
- Complete profile flow for both roles
- Dark mode support via Context API
- Form handling and validation with React Hook Form
- Server-state management with React Query and Devtools
- Toast notifications with React Hot Toast
- Responsive UI styled with Tailwind CSS and Headless UI components

## Demo

_(Include a GIF or link to a live demo here)_

## Tech Stack

- **Framework**: React 19, Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router v7
- **State Management**: React Query
- **HTTP Client**: Axios (with interceptors for token refresh)
- **Forms**: React Hook Form
- **Notifications**: React Hot Toast
- **Icons**: React Icons
- **Date Picker**: react-multi-date-picker
- **OTP Input**: react-otp-input

## Project Structure

```
freelancer-app/
├─ src/
│  ├─ components/         # Reusable UI components
│  ├─ pages/              # Route-based page views (Auth, Home, Owner, Freelancer)
│  ├─ features/           # Feature modules and layouts for owner/freelancer
│  ├─ services/           # API services (axios)
│  ├─ hooks/              # Custom React hooks
│  ├─ context/            # Context providers (DarkMode)
│  ├─ utils/              # Utility functions
│  ├─ styles/             # Tailwind global styles
│  ├─ App.tsx             # Main application component
│  └─ main.tsx            # Entry point
└─ vite.config.ts         # Vite configuration with aliases and plugins
```

## Getting Started

### Prerequisites

- Node.js v16+ and npm

### Installation

```bash
git clone https://github.com/yourusername/freelancer-app.git
cd freelancer-app
npm install
```

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

```bash
npm run dev      # Start development server
npm run build    # Build for production (runs tsc and vite build)
npm run preview  # Preview production build
npm run lint     # Run ESLint checks
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Amir Hossein Rahmati - amirrahmati471@gmail.com

Project Link: https://github.com/AmirRaZz/freelancer-app