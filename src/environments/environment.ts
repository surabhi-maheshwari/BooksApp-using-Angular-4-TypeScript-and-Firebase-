// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyABDI1gPki138xFmA5iHapCtj9BPbc1CVM",
    authDomain: "booknotes-e21e4.firebaseapp.com",
    databaseURL: "https://booknotes-e21e4.firebaseio.com",
    projectId: "booknotes-e21e4",
    storageBucket: "booknotes-e21e4.appspot.com",
    messagingSenderId: "6637447142"
  }
};
