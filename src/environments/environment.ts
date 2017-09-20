// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

  firebase : {
    apiKey: "AIzaSyDR0WO08kPd6H80FvPSsrjzysTfV49YB10",
    authDomain: "angular-castles.firebaseapp.com",
    databaseURL: "https://angular-castles.firebaseio.com",
    projectId: "angular-castles",
    storageBucket: "angular-castles.appspot.com",
    messagingSenderId: "571309061086"
  }

};
