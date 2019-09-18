// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { firebaseAPI } from '../firebaseKey.api';

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: firebaseAPI,
    authDomain: 'fata-morgana-451e0.firebaseapp.com',
    databaseURL: 'https://fata-morgana-451e0.firebaseio.com',
    projectId: 'fata-morgana-451e0',
    storageBucket: 'fata-morgana-451e0.appspot.com',
    messagingSenderId: '1083188635690',
    appId: '1:1083188635690:web:cb67c1d6b04e88eb2d3b53'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
