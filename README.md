# Forkify

![Forkify](https://i.ibb.co/RQB6176/Screenshot-14-5-2024-0052-forkify-by-codamystique-netlify-app.jpg)

Forkify is a recipe search and management application built with React, TanStack Query, and React Router. It allows users to search for recipes, view detailed information, and save their favorite recipes for future reference.

## Features

- **Search:** Find recipes based on keywords or ingredients.
- **Recipe Details:** View detailed information about a recipe, including ingredients, instructions, and nutritional information.
- **Pagination:** Browse through multiple pages of search results.
- **Bookmarks:** Save your favorite recipes for easy access later.
- **User-Friendly Interface:** Intuitive and visually appealing design powered by React.

## Technologies Used

- React
- TanStack Query
- React Router
- Vite (build tool)
- Forkify API (https://forkify-api.herokuapp.com/v2)

## Getting Started

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/forkify.git
    ```

2. Navigate to the project directory:

    ```bash
    cd forkify
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Obtain an API key from [Forkify API](https://forkify-api.herokuapp.com/v2).

5. Create a `.env.development` file in the root directory and add the following line, replacing `YOUR_API_KEY` with the key you obtained:

    ```bash
    VITE_FORKIFY_API_KEY=<your_api_key>
    ```

6. Start the development server:

    ```bash
    npm run dev
    ```

7. Open your browser and visit [http://localhost:5173](http://localhost:5173) to see the application in action.
