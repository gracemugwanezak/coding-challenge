### Basic authentication and crud operations for an E-commerce API

# Table of Contents

`installation`

`setup and running API`

`Authentication`

`Endpoints`

- `Authentication endpoints`

- `Order endpoints`
- `Review endpoints`

`Error handling`

`Docker setup`

## Installation

git clone the repository [repo](https://github.com/gracemugwanezak/coding-challenge) to run in your local machine.

cd coding-challenge

```bash
npm install
```

run the repo locally

```bash
npm run start:dev
```

The APIs will be available at [API](localhost:3333).

## Authentication

The API uses JWT (JSON Web Tokens) for user authentication. To authenticate, you need to include a valid JWT token in the `Authorization` header of each request

#### How to Obtain a Token:

Login Endpoint:

To log in and obtain a JWT token, send a `POST` request to `/auth/signin` with the following payload

```json
{
  "email": "user@example.com",
  "password": "your-password"
}
```

The response will contain the token

```json
{
  "access_token": "your-jwt-token"
}
```

## Endpoints

### Authentication Endpoints

1. POST /auth/signin

- Request body:

```
json
{
  "email": "user@example.com",
  "password": "password"
}
```

- Response:

```{
  "access_token": "jwt-token"
}
```

### Order Endpoints

1. POST /orders

Place an order for a product. This endpoint requires a JWT token.

- Request body:

```
json
{
  "productId": [3],
  "quantity": 2
}

```

- Response:

```
{
 {
	"id": 4,
	"userId": 1,
	"status": "PENDING",
	"createdAt": "2024-11-25T11:37:56.820Z",
	"updatedAt": "2024-11-25T11:37:56.820Z",
	"products": [
		{
			"id": 3,
			"name": "Product B",
			"price": 200,
			"description": "Description of Product B",
			"createdAt": "2024-11-25T08:31:58.894Z",
			"updatedAt": "2024-11-25T08:31:58.894Z"
		}
	]
}
}

```

2.GET /orders/:userId

- Request body:

```
json
{
  "productId": [3],
}

```

- Response:

```
	{
		"id": 1,
		"userId": 1,
		"status": "PENDING",
		"createdAt": "2024-11-25T09:51:51.906Z",
		"updatedAt": "2024-11-25T09:51:51.906Z",
		"products": [
			{
				"id": 3,
				"name": "Product B",
				"price": 200,
				"description": "Description of Product B",
				"createdAt": "2024-11-25T08:31:58.894Z",
				"updatedAt": "2024-11-25T08:31:58.894Z"
			}
		]
	}

```

### Review Endpoints

1. POST /reviews
   Create a product review. Requires JWT token and that the user has purchased the product.

- Request body:

```
{
  "productId": 3,
  "rating": 4,
  "comment": "This product is great!"
}
```

- Response:

```
{
	"id": 1,
	"userId": 1,
	"productId": 3,
	"rating": 4,
	"comment": "This product is great!",
	"createdAt": "2024-11-25T10:26:19.399Z",
	"updatedAt": "2024-11-25T10:26:19.399Z"
}
```

# Error Handling

The API will return error messages with appropriate HTTP status codes.

- 401 Unauthorized: If the user is not authenticated or the JWT token is missing/invalid.

- 403 Forbidden: If the user is not authorized to perform an action (e.g., reviewing a product not purchased).

- 404 Not Found: If the resource (e.g., order, product, review) is not found.

- 500 Internal Server Error: If there is an unexpected issue on the server.

## Docker Setup

#### First, build the Docker images:

`docker-compose up --build`

#### API will be available at:

`http://localhost:5434`
