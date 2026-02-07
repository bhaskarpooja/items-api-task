# Items REST API

A simple Java backend application that provides a RESTful API for managing a collection of items. Suitable for e-commerce products, movies, books, or any similar catalog use case.

## Tech Stack

- Java 17
- Spring Boot 3.2
- Maven
- In-memory storage (ArrayList)

## Prerequisites

- Java 17 or higher
- Maven 3.6+

## How to Run

### Locally

```bash
mvn spring-boot:run
```

Or using Maven Wrapper (Windows):
```bash
mvnw.cmd spring-boot:run
```

The API will be available at `http://localhost:8080`.

### Using the JAR

```bash
mvn clean package
java -jar target/items-api-1.0.0.jar
```

## API Endpoints

### 1. Add a New Item

**POST** `/api/items`

Request Body (JSON):
```json
{
  "name": "Wireless Headphones",
  "description": "Noise-cancelling Bluetooth headphones",
  "price": 99.99,
  "category": "Electronics"
}
```

- `name` (required): 1-200 characters
- `description` (optional): max 2000 characters
- `price` (optional): non-negative
- `category` (optional): max 100 characters

### 2. Get Item by ID

**GET** `/api/items/{id}`

Example: `GET /api/items/1`

## Example cURL Commands

```bash
# Add an item
curl -X POST http://localhost:8080/api/items -H "Content-Type: application/json" -d "{\"name\":\"Laptop\",\"description\":\"15-inch laptop\",\"price\":899.99,\"category\":\"Electronics\"}"

# Get item by ID
curl http://localhost:8080/api/items/1
```

## STS Import

1. File → Import → Maven → Existing Maven Projects
2. Root Directory: Browse to this project folder
3. Ensure pom.xml is checked
4. Finish
5. Right-click ItemsApiApplication.java → Run As → Spring Boot App

## Deploy on Render

1. Push this project to GitHub
2. Go to render.com → New → Web Service
3. Connect your repo
4. Build Command: `mvn clean package -DskipTests`
5. Start Command: `java -jar target/items-api-1.0.0.jar`
6. Create Web Service
