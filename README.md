# Static Node Server

A lightweight, secure Express.js server with a static client architecture. Features security middleware, Docker support, and a RESTful API for basic authentication and user management.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org/)

## Features

- 🚀 Fast and lightweight Express.js server
- 🔒 Security middleware (Helmet, CORS)
- 🐳 Docker support with healthchecks
- 📡 RESTful API endpoints
- 🎨 Static file serving
- ⚙️ Environment-based configuration
- 📝 Comprehensive API documentation

## Requirements

- **Node.js**: >= 18.0.0
- **npm** or **yarn** or **pnpm**
- **Docker** (optional, for containerized deployment)

## Installation

### Using npm

```bash
npm install
npm start
```

### Using yarn

```bash
yarn install
yarn start
```

### Using pnpm

```bash
pnpm install
pnpm start
```

## Docker Usage

### Build Docker Image

```bash
npm run docker:build
# or
docker build -t static-node-server .
```

### Run Docker Container

```bash
npm run docker:run
# or
docker run --name static-node-server -d -p 3000:3000 static-node-server
```

### Docker Compose (optional)

Create a `docker-compose.yml` file:

```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - NODE_PORT=3000
    restart: unless-stopped
```

Run with:
```bash
docker-compose up -d
```

## Environment Variables

Configure the application using environment variables:

| Variable | Description | Default |
|----------|-------------|---------|
| `NODE_PROTOCOL` | Server protocol (http/https) | `http` |
| `NODE_HOSTNAME` | Server hostname | `localhost` |
| `NODE_PORT` | Server port | `3000` |
| `NODE_ENV` | Environment mode (develop/production) | `develop` |
| `MOCK_FLAG` | Enable mock mode | `false` |

### Example `.env` file

```env
NODE_PROTOCOL=http
NODE_HOSTNAME=localhost
NODE_PORT=3000
NODE_ENV=develop
MOCK_FLAG=false
```

## API Documentation

### Base URL
```
http://localhost:3000
```

### Endpoints

#### Authentication API

**GET /api/**
- Description: Get authentication status and environment information
- Response: `200 OK`
```json
[
  {
    "Env": "develop"
  }
]
```

**GET /api/login**
- Description: Display login page
- Response: `200 OK`
```
You are on the login page
```

**GET /api/logout**
- Description: Display logout page
- Response: `200 OK`
```
You are on the logout page
```

#### Home API

**GET /api/home**
- Description: Get welcome message
- Response: `200 OK`
```json
{
  "message": "Welcome to the coolest API on earth!"
}
```

#### Users API

**GET /api/users**
- Description: Get user configuration information
- Response: `200 OK`
```json
[
  {
    "mock": "false"
  }
]
```

#### Version API

**GET /version**
- Description: Get server version and configuration
- Response: `200 OK`
```json
{
  "name": "static-node-server",
  "version": "1.0.0",
  "port": "3000",
  "hostname": "localhost",
  "mode": "develop",
  "mock": "false"
}
```

#### Static Files

**GET /***
- Description: Serves static files from the client directory
- Default: Serves `index.html` for all unmatched routes

## Project Structure

```
static-node-server/
├── client/              # Static client files
│   └── index.html      # Main HTML page
├── server/             # Server-side code
│   ├── apis/           # API routes
│   │   ├── authenticate/
│   │   ├── home/
│   │   └── users/
│   ├── config.js       # Server configuration
│   ├── routes.js       # Route definitions
│   └── index.js        # Server entry point
├── Dockerfile          # Docker configuration
├── .dockerignore       # Docker ignore file
├── package.json        # Project dependencies
└── README.md          # This file
```

## Development

### Local Development

```bash
# Install dependencies
npm install

# Start the server
npm start

# Server will be available at http://localhost:3000
```

### Testing the API

Using curl:
```bash
# Test version endpoint
curl http://localhost:3000/version

# Test home endpoint
curl http://localhost:3000/api/home

# Test authentication endpoint
curl http://localhost:3000/api/
```

## Security

This application includes the following security features:

- **Helmet**: Sets various HTTP headers to protect against common vulnerabilities
- **CORS**: Configures Cross-Origin Resource Sharing
- **Docker Healthcheck**: Monitors application health in containerized environments

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Quality Guidelines

- Use `const` for immutable variables
- Add JSDoc comments for functions
- Follow existing code style
- Test your changes before submitting

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Suhail Taj Shaik**

## Changelog

### Version 1.0.0
- Initial release
- Express server with static file serving
- RESTful API endpoints
- Docker support
- Security middleware (Helmet, CORS)
- Environment-based configuration

## Support

For issues and questions, please open an issue on the GitHub repository.
