# FaceBook Posts

This project is a simple replica of Facebooks posting.

# How To Start App

Just run `npm start` from your terminal

# CI/CD

I Added CI/CD that has two different build steps which are documented below. This will run on commits to a branch and as well as merging into main:
    - `Build`: Runs a build job of the application to confirm that the app can build for productions correctly

    - `Test`: Runs both a `lint-test-job` and `unit-test-job`
        - `lint-test-job`: using `eslint` 
        - `unit-test-job`: using react testing library

# Testing Information

I decided to go with React Testing Library to test all my components, it builds off `DOM Testing Library` more information can be found here -> https://testing-library.com/docs/react-testing-library/intro/

# Packages Used In This Project

- React-Redux:  https://react-redux.js.org/

- Styled Components: https://styled-components.com/

- Font awesome: https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react

