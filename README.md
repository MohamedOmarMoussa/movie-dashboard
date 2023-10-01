# Movie Dashboard

This is a Vue 3 project template for creating a movie dashboard application. It is built with Vite, TypeScript, and Tailwind CSS to provide a fast and efficient development experience.

### Header

The header of our movie dashboard includes key navigation links and branding elements.

![Header](/screens/screen1.png)
*Caption: The header with navigation links and branding elements.*

### Homepage

Our homepage welcomes users with an eye-catching movie background and provides a glimpse of trending movies.

![Homepage](/screens/screen2.png)
*Caption: The homepage featuring a movie background and trending movies.*

### Listing

In the "Listing" section, users can explore movies by various categories such as Action, Animation, Adventure, Comedy, and Documentary. They can easily switch between categories using the provided tabs.

![Listing](/screens/screen3.png)
*Caption: The listing section with category tabs and movie list.*

### Favorites

In the "Favorites" section, users can curate their list of favorite movies. They can easily add or remove movies from their favorites, ensuring they never miss a beloved film.

![Favorites](/screens/screen4.png)
*Caption: The favorites section with a list of user-curated favorite movies.*

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Introduction](#introduction)
- [Recommended IDE Setup](#recommended-ide-setup)
- [Type Support for `.vue` Imports in TS](#type-support-for-vue-imports-in-ts)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Development](#development)
- [Production Build](#production-build)
- [Linting](#linting)
- [API](#api)
- [Features](#features)
- [Contributions](#contributions)
- [License](#license)

## Introduction

This Vue 3 project template is designed to help you create a movie dashboard application quickly. It leverages Vite for a blazing-fast development experience, TypeScript for type safety, and Tailwind CSS for responsive and beautiful UI.

## Recommended IDE Setup

For an optimal development experience, we recommend the following IDE setup:

- [Visual Studio Code (VSCode)](https://code.visualstudio.com/)
- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (Disable Vetur if enabled)
- [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)

## Type Support for `.vue` Imports in TS

To enable type support for `.vue` imports in TypeScript, we use `vue-tsc` for type checking. Additionally, you can enhance the performance of the TypeScript language service by enabling Take Over Mode in Volar. Follow these steps to set it up:

1. Disable the built-in TypeScript Extension:
    - Run "Extensions: Show Built-in Extensions" from the VSCode command palette.
    - Find "TypeScript and JavaScript Language Features," right-click, and select "Disable (Workspace)."
2. Reload the VSCode window by running "Developer: Reload Window" from the command palette.

## Getting Started

To set up the project, follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/MohamedOmarMoussa/movie-dashboard.git
   ```

2. Navigate to the project directory:

   ```sh
   cd movie-dashboard
   ```

3. Install dependencies:

   ```sh
   npm install
   ```

## Project Structure

The project is organized as follows:

- **src:** Contains the Vue 3 application code.
  - **assets:** Includes static assets like images and fonts.
  - **components:** Contains reusable UI components (e.g., BaseTabs, MovieCard).
  - **store:** Contains Pinia store modules for managing application state.
  - **views:** Contains Vue components for different pages (Homepage, Listing, Favorites).
  - **router:** Defines the application routes.

## Development

To run the development server with hot-reloading, use the following command:

```sh
npm run dev
```

This will start the development server, and your application will be available at `http://localhost:5173`.

## Production Build

For a production build that includes type-checking, compilation, and minification, run:

```sh
npm run build
```

This will generate optimized production-ready files in the `dist` directory.

## Linting

You can lint your code using [ESLint](https://eslint.org/) with the following command:

```sh
npm run lint
```

## API

This project uses the [The Movie Database (TMDb) API](https://developers.themoviedb.org/3/getting-started/introduction) to fetch movie data. You will need to obtain an API key from TMDb and configure it in your application.

## Features

- **Feature 1: Header**
  - Logo with a link to the homepage.
  - Links to navigate to the list of movies and favorites pages.

- **Feature 2: Homepage**
  - Displays an image of a movie as a background.
  - Lists 4 trending movies of the moment.

- **Feature 3: Listing**
  - Tabs for different movie categories (Action, Animation, Adventure, Comedy, Documentary).
  - Lists movies related to the selected category.

- **Feature 4: Favorites**
  - Allows users to add and remove movies from their favorites.
  - Displays a list of favorite movies.

## Contributions

Contributions to this project are welcome! If you have suggestions, bug reports, or would like to add new features, please feel free to open issues and submit pull requests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
