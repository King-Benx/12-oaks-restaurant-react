# 12-oaks Restaurant React

A simple web application that consumes an api to deliver content about businesses.

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)

![Screenshot 2023-03-22 at 04-43-08 12-oaks Restuarants](https://user-images.githubusercontent.com/17830204/226783085-d3b52531-d1fb-417a-a32c-a78c834a0cfe.png)

![Screenshot 2023-03-22 at 04-43-33 12-oaks Restuarants](https://user-images.githubusercontent.com/17830204/226783132-3b38cfde-5609-4102-9fa6-e37154772bc6.png)

## Table of Contents

- [Technologies and Libraries Used](#technologies-and-libraries-used)
- [Prerequisites](#prerequisites)
- [How To Get Started](#how-to-get-started)
  - [Testing](#testing)
- [Project Structure](#project-structure)
  - [Atomic Design](#atomic-design)
  - [Styling](#styling)
  - [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
- [How to Contribute](#pull-requests)
- [Contributors](#contributors)

## Technologies and Libraries Used or Learning material

- **React**
- **[Jest](https://jestjs.io/docs/tutorial-react)** for testing
- **[Tailwind](https://tailwindcss.com/docs/installation)** for styling

### Other learning material

- [Learning resources and material](https://atomicdesign.bradfrost.com/chapter-2/)
- [Atomic Design methodology](https://danilowoz.com/blog/atomic-design-with-react)

## Prerequisites

1. Clone project `git clone git@github.com:King-Benx/12-oaks-restaurant-react.git`
2. Navigate to root directory.

### Getting started without docker installed on your machine or you donot want to use docker

1. Download and install Node.js atleast 16.10.0 on your machine
2. Build dependencies using `npm i` or `yarn` if you have yarn installed
3. Set up respective environment variables in your `.env` file in your root directory. Follow the `.env.example`
4. Run the project using `npm start` or `yarn start`

NB: Make sure your API server is running as well
[12-oaks-restaurant-api](https://github.com/King-Benx/12-oaks-restaurant-api)

### Testing

To run the tests use this command: `npm run test`

## Project Structure

### Atomic Design

Using the Atomic Design methodology for our project structure. Atomic design, developed by Brad Frost and Dave Olsen, is a methodology for crafting design systems with five fundamental building blocks:

- **Atoms**: basic building blocks of matter, such as a button, input or a form label. They’re not useful on their own.
- **Molecules**: grouping atoms together, such as combining a button, input and form label to build functionality.
- **Organisms**: combining molecules together to form organisms that make up a distinct section of an interface (i.e. navigation bar)
- **Templates**: consisting mostly of groups of organisms to form a page — where clients can see a final design in place.
- **Pages**: an ecosystem that views different template renders. We can create multiple ecosystems into a single environment — the application.

### Styling

I'm am using react tailwind for this project

### Folder Structure

The folder structure looks something like this:

```
src
   |-- assets
   |   |-- css
   |   |-- fonts
   |   |-- images
   |   |-- scss
   |   |-- svg
   |-- components
   |   |-- atoms
   |   |-- molecules
   |   |-- organisms
   |-- pages 
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run prettier`

Launches the prettier runner to run code farmat checks on the codebase.<br />
Running `npm prettier:fix` starts the runner with autowrite mode turned on to autoformat fixable styles
[running prettier](https://prettier.io/docs/en/index.html).

### `npm run lint`

Launches the eslint runner to run eslint checks on the codebase.<br />
Running `npm lint:fix` starts the runner with autofix mode turned on to autofix fixable rules
[running eslint](https://facebook.github.io/create-react-app/docs/running-tests).

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### How to troubleshoot?

#### Fixing `lint-stage prevented an empty commit`

- If your changes are not actually valid ( modifying the last/previous commit ). You will see this actual error.
- Ensure that you are not undoing previous configurations or linted files.

### Pull requests

I'm glad to get pull request if anything is missing or something is buggy. However, there are a couple of things you can do to make life easier for the maintainers:

- Explain the issue that your PR is solving - or link to an existing issue
- Follow the repository structure and new sections in the corresponding folders


## Contributors

[Recent contributors](https://github.com/King-Benx/12-oaks-restaurant-react/graphs/contributors)
