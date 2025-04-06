# 🧩 Product Management API – Backend (NestJS + PostgreSQL)

This is the backend API for a simple product management system, built using **NestJS** and **PostgreSQL**.

---

## 🚀 Features

- ✅ Create a new product (with image upload)
- ✅ Get all products
- ✅ Get single product by ID
- ✅ Image upload using Multer to local storage
- ✅ Swagger UI for API documentation and testing

---

## ⚙️ Tech Stack

| Layer     | Tech            |
|-----------|-----------------|
| Framework | [NestJS](https://nestjs.com/) |
| Database  | [PostgreSQL](https://www.postgresql.org/) |
| ORM       | TypeORM         |
| File Upload | Multer        |
| Validation | class-validator |
| Docs      | Swagger (via `@nestjs/swagger`) |

---

## 📁 Project Structure

2. Set up Environment Variables
Create a .env file:

env
Copy
Edit
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=yourpassword
DB_NAME=products_db


📚 API Documentation (Swagger)
Swagger is available at:

📘 http://localhost:5000/api

📦 API Endpoints
Method	Endpoint	Description
POST	/products	Create new product
GET	/products	Get all products
GET	/products/:id	Get product by ID
PATCH	/products/:id	Update product
DELETE	/products/:id	Delete product
