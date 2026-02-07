# Items REST API

A simple Java backend application that provides a RESTful API for managing a collection of items. Suitable for e-commerce products, movies, books, or any similar catalog use case.

## Deployed link
https://items-api-task.onrender.com

## Tech Stack

- Java 17
- Spring Boot 3.2
- Maven
- In-memory storage (ArrayList)

## Project Structure

src/main/java/com/example/itemsapi
- controller  
  - ItemController  
  - GlobalExceptionHandler
- service  
  - ItemService
- repository  
  - ItemRepository
- model  
  - Item
- dto  
  - CreateItemRequest

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

## Frontend UI (Vercel / Netlify)

A simple React UI lives in the `frontend/` folder. To deploy it:

1. Deploy the `frontend` app to **Vercel** or **Netlify** (build: `npm run build`, output: `dist`). Set env var `VITE_API_URL=https://items-api-task.onrender.com`.
2. On **Render**, set the backend environment variable **`CORS_ALLOWED_ORIGINS`** to your frontend URL(s), comma-separated, e.g.  
   `https://your-app.vercel.app` or `https://your-app.netlify.app`
3. Redeploy the backend on Render so CORS takes effect.

See `frontend/README.md` for local run and deploy steps.

## STS Import

1. File → Import → Maven → Existing Maven Projects
2. Root Directory: Browse to this project folder
3. Finish
4. Right-click ItemsApiApplication.java → Run As → Spring Boot App

