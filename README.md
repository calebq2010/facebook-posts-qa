# FaceBook Posts

This project is a simple replica of Facebooks posting, built in React Typescript and backed with RTL(React Testing Library) for component tests!

### Current Features:

- A user is able to type in the `What is on your mind?` input and hit the post it button to create a post

- A user is able to hit the `Like` button and it will like/unlike the post

# Hosting

This project is hosted using Amazons Amplify technology:

- Site: https://main.d6jhflam20qmo.amplifyapp.com/

- Amazon Amplify: https://aws.amazon.com/amplify/

# How to Get Started Locally

- Clone the repo locally

- from the root of the directory run `npm install`

- After that completes run `npm start` 

- You can then navigate in your browser to `http://localhost:3000/` and the app should be running there

# CI/CD

I Added CI/CD that has two different build steps which are documented below. This will run on commits to a branch and as well as merging into main:

- **Build**: Runs a build job of the application to confirm that the app can build for production correctly

- **Test**: Runs both a **lint-test-job** and **unit-test-job** step
  - **lint-test-job**: using **eslint** 
  - **unit-test-job**: react testing library component tests

# How to Run the Tests

### prerequisites

- Confirm that you are on latest chrome version which is version 92

- If you need to update:
    - `brew update`
    - `brew upgrade chromedriver`

## Run NightWatch Tests

- Run NightWatch tests From the root of the Facebook app by running `npx nightwatch`

- It should spin up chrome and run through the tests in total of 10 assertions

## Testing Information

I decided to go with React Testing Library to test all my components, it builds off `DOM Testing Library` more information can be found here -> https://testing-library.com/docs/react-testing-library/intro/

If you would like to run tests locally it is as easy as running `npm test` in your terminal from the root of the application directory

## NightWatch.js

With having experience in automation development and QA, I thought it would be fun to spend some time looking into a fully JavaScript based automation development tool that could help with testing. I found an end-to-end testing framework called `NightWatch.js` that is powered by Node.js and uses W3C WebDrive which was formerly Selenium.

`NightWatch` Repo: https://github.com/nightwatchjs/nightwatch

## Compatible Browsers

Currently Nightwatch.js supports the following browsers for e2e testing:
  - Chrome
  - Edge
  - Firefox
  - Safari

## High Level Overview

There currently is a `tests` directory in the root of the application that holds the test file that Nightwatch.js loads from the configuration file.

# Packages Used in This Project

- React-Redux:  https://react-redux.js.org/

- Styled Components: https://styled-components.com/

- Font awesome: https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react

# Other Production Considerations

There are a few things that I would do if I was to have this code in production and those thoughts are below:

1. I would of course implement the comment feature (currently the app does not have the capability).

2. I would implement instead of just using in memory with redux store, an actual database backend (mongoDB or DynamoDB)

3. Nightwatch.js does provide the idea of page object pattern which I feel if I were to take this to production would be the best pattern to follow with E2E testing.

4. I would setup another CI/CD pipeline that runs the E2E tests as well on each commit / merge to main (for sake of time I did not set this up)
