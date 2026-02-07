# Items REST API

A simple Java backend application that provides a RESTful API for managing a collection of items. Suitable for e-commerce products, movies, books, or any similar catalog use case.

## Deployed link
https://java-api-task.netlify.app/

https://items-api-task.onrender.com

## Tech Stack

- Java 17
- Spring Boot 3.2
- Maven
- In-memory storage (ArrayList)

## Project Structure

| Path | Description |
|------|-------------|
| `frontend/` | React UI – Create item, Get by ID |
| `frontend/src/App.jsx` | Main UI and API calls |
| `src/main/java/.../config/WebConfig.java` | CORS for frontend origin |
| `src/main/java/.../controller/ItemController.java` | REST endpoints `/api/items` |
| `src/main/java/.../service/ItemService.java` | Item business logic |
| `src/main/java/.../repository/ItemRepository.java` | In-memory storage |
| `src/main/java/.../model/Item.java` | Item entity |
| `src/main/java/.../dto/CreateItemRequest.java` | Request DTO and validation |
| `src/main/resources/application.properties` | Port, CORS origins (env: `CORS_ALLOWED_ORIGINS`) |
| `pom.xml` | Maven build and dependencies |

## Prerequisites

- Java 17 or higher
- Maven 3.6+

## How to Run

### Locally

```bash
mvn spring-boot:run
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
  "price": 1000.00,
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

## STS Import

1. File → Import → Maven → Existing Maven Projects
2. Root Directory: Browse to this project folder
3. Finish
4. Right-click ItemsApiApplication.java → Run As → Spring Boot App

