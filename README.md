# :page_facing_up: Multi Steps Survey
A multi-step survey script to track user's informations.

This survey can be added to any website, after your build

## :dart: Objectives and Requirements

- The survey should load in a pop-up, 2 seconds after the page has loaded.
- The survey should contain 4 steps and have 'Next' and 'Previous' buttons on the steps which
need them.
- The survey should have a 'Submit' button on the last step, which on click should set the survey
as submitted and close the popup.
- If the browser tab was closed before the survey was submitted and subsequently re-opened,
the script should re-open the survey and continue from where the user left off.
- The survey should not re-open if it was already submitted.
- The survey should work by including a single JS file in any HTML.

## Application Structure

Multi Steps Survey uses a simple architecture using Chackra UI for styling, based on atomic design so it can scale smoothly. There are no molecules and organisms yet, for example, because the application is still small

- __assets__: to store your static files, such as images and fonts.
- __components__: small HTML elements with minimal styling e.g. `<Button />`
- __hooks__: Custom hooks, reusable in the entire app. Not used yet.
- __pages__: The actual pages the user sees with your slices to manage the state.
- __redux__: Configure the global state management using redux, and redux-persist, `hooks.ts` to configure typed hooks such as `useAppDispatch()` and `useAppSelector()`, `store.ts` to configure the store using redux-toolkit.
- __theme__: The custom theme for the application that can be scaled for a design system.

`<App />` returns the only existing page because as the application does not have more than one, a routing system was not necessary.

This application uses Conventional commits and lint checks, that is executed before each commit using `husky` and `lint-staged`.

## :memo: Features/Steps

- __Identity__. You can add your name and email, if you want.
- __Details__. You need to add your age and gender (Required).
- __Favorites__. You need to add your Favorite book and a Favorite color at least (Required).
- __Summary__. Here, you can see your informations added and submit.
- __Feedback__. Here, you can see a thank you message after submitting your details. Don't worry, the form will close automatically.

## :running_woman: How to run this project

### Local Setup

Dependencies:

- Node LTS 16.*
- nvm

Switching Node versions:
- If you haven't already, install nvm using `brew install nvm`
  - If you're using zsh, you'll also need to update the config. Use the command `nano ~/.zshrc` and add the following:
  ```
  export NVM_DIR="$HOME/.nvm"
  [ -s "/usr/local/opt/nvm/nvm.sh" ] && . "/usr/local/opt/nvm/nvm.sh"  # This loads nvm
  [ -s "/usr/local/opt/nvm/etc/bash_completion.d/nvm" ] && . "/usr/local/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion
  ```
- `nvm install 16`
- `nvm use 16`

Installation:

- `npm install`

Running local server:

- `npm run dev`
- go to `localhost:5173`

### Docker

Running the Multi Steps Survey locally using Docker is easy!

Build the docker image:

```
$ docker build -t multi-steps-survey .
```

To run the Docker container:

```
$ docker run -it -p 5173:5173 multi-steps-survey
```

### Production Mode (any website)

Installation:

- `npm install`

Build:

- `npm run build`

It will generates the single script file using Rollup in root project directory:

```
 dist/assets/[file-name].js
```

In your html website:

1: If you are testing with a local HTML with the local file, uses a live-server or something like that, because some current browsers eg Google Chrome are only accepting HTTP or HTTPS requests and will block your app because of `File://`.

2: Make sure that your website has a div with root id in the index.html, Otherwise creates one:

```
 <div id="root"></div>
```

Add this file in the end of the body, example:

```
 <script type="module" src="/path/file.js"></script>
```

## 🧰: Project dependencies
- React 18*;
- Typescript;
- Vite;
- Redux;
- Redux-toolkit;
- Redux-persist;
- Chackra-UI;
- formik;
- Emotion for styled components;

## :construction_worker: Work todo
You can contribute if you want :grin:

- Features must be segregated in use cases;
- keys must be placed on secrets (for future envinronments cases);
- Improve the Rollup config to reduce the bundle and prevent the user from needing a root div on their page;
- Coupling must be reduced to minimum;
- Some project structural issues must be fixed;
- Unit and integration tests coverage must be added/increased;
- Add CI/CD to deliver the script in some CDN;
- Load test coverage must be introduced.
