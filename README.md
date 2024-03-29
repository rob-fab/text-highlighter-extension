# Your Highlights chrome extension

This is a chrome extension that allows you to save selected text and display it in the new page tab. It was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the extension for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\

## How to add the extension to Chrome:

1. Install the dependencies with `npm install`

2. Build the project with `npm run build`

3. Enable Developer Mode in Chrome:

   Open Chrome and navigate to the extensions page by going to chrome://extensions/ in your address bar.
   Locate the toggle switch for "Developer mode" in the top-right corner and enable it. This unlocks options for loading unpacked extensions.

4. Load the Unpacked Extension:

   Once Developer mode is on, you'll see new buttons appear at the top of the extensions page. Click the button labeled "LOAD UNPACKED".
   A file browser window will pop up. Navigate to the build folder containing the extension's unzipped build files. Select the folder and click "Open" or "OK".

## How to use the extension:

Once the extension is added, you can select any text on a website, right click and choose an option to "Save selection". Now, when you open a new tab, you should see the newly added selection in the table.
If you want to remove the selection, just use the "Remove" button.
