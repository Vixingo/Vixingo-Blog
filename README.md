# Themed Blog Listing Application

The project was developed using Material-UI (MUI) for UI components, Redux Toolkit for state management, and deployed on Vercel with a CI/CD pipeline set up using GitHub Actions.

Note: For a personalized experience, The theme will automatically switch between light and Dark according to user's system's default theme easily. For now, you check this by changing your system's default theme.

# Technology Stack

**Frontend**
ReactJS: The core library for building the user interface.

Material-UI (MUI): Provided pre-built, customizable UI components for a responsive and visually appealing design.

React Router: Implemented for client-side routing between the home page and blog detail page.

**State Management**
Redux Toolkit: Used for global state management, including theme persistence and API response handling.

**Data Fetching**
JSONPlaceholder API: Used to fetch blog posts for the application.

Local storage : Used to save the fetched data locally for unnecessary API call. 

**Deployment**
Vercel: Hosting platform for deployment.

GitHub Actions: CI/CD pipeline for automated deployment.

Currently, using two official plugins are from vite:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
