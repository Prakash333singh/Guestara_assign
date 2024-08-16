# how to run this project locally in your local system

## Setup

1. Clone the repository
2. Cd src
3. Run `npm install`
4. Create a `.env` file with `MONGODB_URL` and `PORT`
5. Run `npm start`

## Run with docker

Build and run your Docker container

Build the Docker image:
docker build -t my-node-app

Run the Docker container:
docker run -p 3000:3000 my-node-app

Access the application:
Open a web browser and go to http://localhost:3000. This should display your Node.js application running inside the Docker container.

## folder structure

📁 src
├── server.js
├── 📁 database
│   └── db.js
├── 📁 controllers
│   ├── categoryController.js
│   ├── itemsController.js
│   └── subCategoryController.js
├── 📁 middleware
│   └── multer.js
├── 📁 models
│   ├── categories.js
│   ├── items.js
│   └── subCategories.js
└── 📁 routes
    ├── categoryRoute.js
    ├── itemRoute.js
    └── subCategoryRoute.js


## API Endpoints

### Categories

`Live url=> https://guestara-assign.onrender.com

- POST /api/v1/category - Create a category
- GET /api/v1/category - Get all categories
- GET /api/v1/category/:id - Get a category by ID
- PATCH /api/v1/category/:id - Edit a category
- Delete /api/v1/category/delete/:id
- PUT api/v1/category/edit/:id
- GET /api/v1/category/getAllSubcategoriesOfCategoryById/:id

### Sub-categories

- POST /api/v1/subcategory/create - Create a sub-category
- GET /api/v1/subcategory/getAll- Get all sub-categories
- GET /api/subcategories/:id - Get a sub-category by ID
- delete /api/v1/subcategory/delete/:id - delete a sub-category by ID
- PATCH /api/v1/subcategory/edit/:id - Edit a sub-category

### Items

- POST /api/v1/item/create - Create an item
- GET /api/v1/item/getAll - Get all items
- GET api/v1/item/getItemById/:id - Get an item by ID
- PATCH /api/v1/item/edit/:id - Edit an item
- PATCH /api/v1/item/delete/:id - delete an item
- GET /api/v1/item/getItemByName?name=:name - Search items by name
- GET /api/v1/item/getAllItemsOfCategoryById/:id- Search items by category
- GET /api/v1/item/getAllItemsOfSubcategoryById/:id - Search items by subcategory

## Questions:

**Database Chosen: MongoDB**  
**Why:**

- **Flexibility**: MongoDB's schema-less design allows you to easily manage hierarchical data structures like categories and subcategories. This flexibility is crucial when dealing with nested documents that can change over time.
- **Scalability**: MongoDB can efficiently handle large datasets and high traffic, making it a good choice for applications that expect to grow.
- **Integration with Node.js**: MongoDB integrates smoothly with Node.js through Mongoose, which provides an easy-to-use API for working with MongoDB collections and documents.

**1. Three Things Learned:**

- **Implementing Hierarchical Data Structures in MongoDB**: Learned how to structure and query data that has parent-child relationships, such as categories and subcategories, using MongoDB’s embedded documents and references.
- **Handling Complex Relationships**: Gained experience in managing and enforcing relationships between different collections (categories, subcategories, and items) while ensuring data integrity.
- **Implementing Search Functionality with `$regex`**: Learned to use MongoDB’s `$regex` operator to create flexible and efficient search queries, allowing users to find data based on partial matches or patterns.

**2. Most Difficult Part:**

- **Ensuring Proper Relationships and Constraints**: The most challenging part was managing the relationships between categories, subcategories, and items. Ensuring that these relationships were correctly enforced and that the data remained consistent while also allowing for efficient querying was complex.

**3. Given More Time:**

- **Implement Authentication and Authorization**: I would add a layer of security by implementing user authentication and authorization to ensure that only authorized users can perform certain actions.
- **Add Pagination for GET Requests**: To improve performance and user experience, I would implement pagination, especially for endpoints that return large datasets.
- **Create More Comprehensive Input Validation and Error Handling**: Strengthening the input validation and error handling would make the application more robust and user-friendly.
- **Implement Unit and Integration Tests**: Writing tests would help ensure the reliability and stability of the codebase, making it easier to catch bugs and refactor the code in the future.
- **Add Caching**: To improve performance, especially for frequently accessed data, I would implement caching strategies using tools like Redis.

For any inquiries, please contact [pa7846665@gmail.com](mailto:pa7846665@gmail.com).
