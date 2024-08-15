# how to run this project locally in your local system

## Setup

1. Clone the repository
2. Cd src
3. Run `npm install`
4. Create a `.env` file with `MONGODB_URL` and `PORT`
5. Run `npm start`

## API Endpoints

### Categories

- POST /api/categories - Create a category
- GET /api/categories - Get all categories
- GET /api/categories/:id - Get a category by ID
- PATCH /api/categories/:id - Edit a category

### Sub-categories

- POST /api/subcategories - Create a sub-category
- GET /api/subcategories - Get all sub-categories
- GET /api/subcategories/:id - Get a sub-category by ID
- PATCH /api/subcategories/:id - Edit a sub-category

### Items

- POST /api/items - Create an item
- GET /api/items - Get all items
- GET /api/items/:id - Get an item by ID
- PATCH /api/items/:id - Edit an item
- GET /api/items/search?name=:name - Search items by name
