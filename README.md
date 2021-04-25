# fbasket-server
Backend API endpoints to server the customers, orders and product details.

# Steps to start the server:

1. clone the repo - Git clone https://github.com/ShankarRaknahs/fbasket-server.git
2. cd fbasket-server
3. npm i
4. npm start


# API details:

1. GET Customers
sample url - http://localhost:4000/v1/customers/12345

2. GET Products
sample url - http://localhost:4000/v1/products

3. GET Orders
sample url - http://localhost:4000/v1/orders

4. PATCH Order
sample url - http://localhost:4000/v1/orders/1001

Req.body   {status: "Done"}
	
5. POST products
sample url - http://localhost:4000/v1/products/46123425
Req.body 
		{
			"product_id": "46123425",
			"name": "Ipad Test Pro",
			"quantity": "3",
			"price": "100"
		}

6. GET Sold Products
sample url - http://localhost:4000/v1/products/sold

# Database - MongoDB credentials needs to be provided as environment variable
.sample.env is added for reference


# Please reach out to shankarsachin2u@gmail.com for any queries.