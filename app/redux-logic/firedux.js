import Firedux from 'firedux';
import Firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCOq__ERF8eI6C4G8ir4SDQho8k8j40uu0',
  authDomain: 'paradise-web-30848.firebaseapp.com',
  databaseURL: 'https://paradise-web-30848.firebaseio.com',
  storageBucket: 'paradise-web-30848.appspot.com',
  messagingSenderId: '565091331763'
};

const app = Firebase.initializeApp(config);
const ref = app.database().ref();

export const firedux = new Firedux({
  ref,
  omit: ['$localState']
});

export const configure = (store) => {
  firedux.dispatch = store.dispatch;

  firedux.watch('users');
};
