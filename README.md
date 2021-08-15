# FaceBook Posts

This project is a simple replica of Facebooks posting.

# How To Get Started

- Clone the repo locally

- from the root of the directory run `npm install`

- After that completes run `npm start` 

- You can then navigate in your browser to `http://localhost:3000/` and the app should be running there

# CI/CD

I Added CI/CD that has two different build steps which are documented below. This will run on commits to a branch and as well as merging into main:

- `Build`: Runs a build job of the application to confirm that the app can build for production correctly

- `Test`: Runs both a `lint-test-job` and `unit-test-job` step
  - `lint-test-job`: using `eslint` 
  - `unit-test-job`: using react testing library

# Testing Information

I decided to go with React Testing Library to test all my components, it builds off `DOM Testing Library` more information can be found here -> https://testing-library.com/docs/react-testing-library/intro/

If you would like to run tests locally it is as easy as running `npm test` in your terminal from the root of the application directory

# NightWatch.js

With having expirence in automation development and QA, I thought it would be fun to spend some time looking into a fully javescript based automation development tool that could help with testing. I found a end-to-end testing framework called `NightWatch` that powered by Node.js and uses W3C WebDrive which was formerly Selenium.

`NightWatch` Repo: https://github.com/nightwatchjs/nightwatch

### How To Run The Tests



# Packages Used In This Project

- React-Redux:  https://react-redux.js.org/

- Styled Components: https://styled-components.com/

- Font awesome: https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react

