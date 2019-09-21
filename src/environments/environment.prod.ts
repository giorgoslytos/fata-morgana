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
