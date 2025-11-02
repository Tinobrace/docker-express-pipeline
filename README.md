# docker-express-pipeline

A complete beginner-friendly DevOps project that demonstrates the full CI/CD pipeline from development to deployment.

## 📋 Project Overview

This project showcases a complete DevOps workflow by building a simple Node.js web application and implementing modern DevOps practices including:

- **Application Development** - A lightweight Express.js REST API
- **Containerization** - Docker container for consistent deployments
- **Version Control** - Git/GitHub for source code management
- **Automated Testing** - Jest test suite with CI integration
- **CI/CD Pipeline** - GitHub Actions workflow for automated testing and Docker image publishing

## 🎯 Learning Objectives

This project covers essential DevOps concepts:
- Building and testing a Node.js application
- Creating Dockerfiles and containerizing applications
- Version control with Git and GitHub
- Setting up GitHub Actions CI/CD workflows
- Pushing Docker images to Docker Hub
- Automated testing in CI pipelines

## 🚀 Features

- **Root Endpoint** (`/`) - Returns a greeting message
- **Health Check** (`/health`) - Returns JSON status for monitoring and container health checks
- **Automated Testing** - Jest test suite with supertest for API testing
- **Docker Support** - Containerized application ready for deployment
- **CI/CD Pipeline** - Automated testing and Docker image publishing on push

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Testing**: Jest + Supertest
- **Containerization**: Docker
- **CI/CD**: GitHub Actions
- **Registry**: Docker Hub (optional)
- **Version Control**: Git/GitHub

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/Tinobrace/
cd docker-express-pipeline

# Install dependencies
npm install
```

## 🏃 Running the Application

### Locally with Node.js
```bash
# Start the server
node src/index.js

# The server will run on http://localhost:3000
```

### With Docker
```bash
# Build the Docker image
docker build -t docker-express-pipeline .

# Run the container
docker run -p 3000:3000 docker-express-pipeline

# Access at http://localhost:3000
```

## 🧪 Running Tests

```bash
# Run all tests
npm test

# Run tests with coverage
npm test -- --coverage

# Run tests with open handles detection
npm test -- --detectOpenHandles
```

## 📁 Project Structure

```
docker-express-pipeline/
├── src/
│   └── index.js          # Main application file
├── test/
│   └── app.test.js       # API tests
├── .github/
│   └── workflows/
│       └── ci.yml        # GitHub Actions CI/CD workflow
├── Dockerfile            # Docker container configuration
├── .dockerignore         # Docker ignore patterns
├── package.json          # Project dependencies and scripts
└── README.md            # Project documentation
```

## 🔍 API Endpoints

### GET `/`
Returns a greeting message.

**Response:**
```
Hello from ValenCloud!
```

### GET `/health`
Health check endpoint for monitoring and Docker health checks.

**Response:**
```json
{
  "status": "ok"
}
```

## 🐳 Docker

This application is fully containerized and ready for deployment.

```bash
# Build image
docker build -t valencloud/docker-express-pipeline:latest .

# Run container
docker run -d -p 3000:3000 --name devops-app valencloud/docker-express-pipeline:latest

# Stop container
docker stop devops-app

# Remove container
docker rm devops-app
```

## 🔄 CI/CD Pipeline

The project uses GitHub Actions for continuous integration and deployment:

- **Triggers**: Runs on every push and pull request to `main` branch
- **Testing**: Automatically runs the Jest test suite
- **Docker Build**: Builds Docker image to verify containerization
- **Docker Push**: (Optional) Pushes image to Docker Hub on successful builds

### Setting Up CI/CD

1. Fork/clone this repository
2. Add Docker Hub credentials to GitHub Secrets:
   - `DOCKER_USERNAME`: Your Docker Hub username
   - `DOCKER_PASSWORD`: Your Docker Hub password/token
3. Push changes to trigger the workflow

## 🚀 Deployment

The Docker image can be deployed to any container platform:
- Docker Swarm
- Kubernetes
- AWS ECS/EKS
- Google Cloud Run
- Azure Container Instances
- DigitalOcean App Platform

## 📝 What This Project Teaches

1. **Application Development** - Building a REST API with Node.js and Express
2. **Testing** - Writing and running automated tests
3. **Containerization** - Creating Docker images for consistent deployments
4. **Version Control** - Managing code with Git and GitHub
5. **CI/CD** - Automating testing and deployment with GitHub Actions
6. **DevOps Best Practices** - Health checks, proper error handling, and production-ready configuration

## 👤 Author

ValenCloud

## 📄 License

ISC

---

*Built as a comprehensive introduction to DevOps practices and CI/CD workflows.*
