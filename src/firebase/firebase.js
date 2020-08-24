import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STOREGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: "1:145746116283:web:6c7b9616064c1510b0f39e",
  measurementId: "G-DL66ZD3K2L"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // database.ref('expenses')
// //   .on('value', (snapshot) => {
// //     const expenses = [];

// //     snapshot.forEach((childSnapshot) => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val()
// //       });
// //     });

// //     console.log(expenses)
// //   });

// // database.ref('expenses')
// //   .once('value')
// //   .then((snapshot) => {
// //     const expenses = [];

// //     snapshot.forEach((childSnapshot) => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val()
// //       });
// //     });

// //     console.log(expenses)
// //   });

// database.ref('expenses').push({
//   description: 'rent bill',
//   note: '',
//   amount: '1234455.56',
//   createdAt: '1003i578437'
// });

// // database.ref('notes/-MDFTHsNEwozaVZoKnw9').remove()

// // database.ref('notes').push({
// //   title: 'to do course',
// //   body: 'react, fire'
// // });

// // const firebaseNotes = {
// //   notes: {
// //     eitjergj: {
// //       title: 'first note',
// //       body: 'this is my note'    
// //     },
// //     skdfij: {
// //       title: 'Another note',
// //       body: 'this is my note'   
// //     }
// //   }
// // }

// // const notes = [{
// //   id: '12',
// //   title: 'first note',
// //   body: 'this is my note'
// // }, {
// //   id: '12abc',
// //   title: 'Another note',
// //   body: 'this is my note'
// // }];

// // database.ref('notes').set(notes)

// // database.ref().on('value', (snapshot) => {
// //   const val = snapshot.val();
// //   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// // });


// // setTimeout(() => {
// //   database.ref('name').on('value', (snapshot) => {
// //     console.log(snapshot.val());
// //   })
// // }, 1000);

// // const ch = database.ref().on('value', (snapshot) => {
// //   console.log(snapshot.val());
// // }, (e) => {
// //   console.log('errr', e)
// // });

// // setTimeout(() => {
// //   database.ref('age').set(29);
// // }, 3500);

// // setTimeout(() => {
// //   database.ref().off(ch);
// // }, 7000);

// // setTimeout(() => {
// //   database.ref('age').set(30);
// // }, 10500);

// // database.ref('location/city')
// //   .once('value')
// //   .then((snapshot) => {
// //     const val = snapshot.val();
// //     console.log(val);
// //   })
// //   .catch((e) => {
// //     console.log('Error fatching data', e)
// //   })

// // database.ref().set({
// //   name: 'Sofiya',
// //   age: 26,
// //   stresslevel: 6,
// //   job: {
// //     title: 'SD',
// //     company: 'Google'
// //   },
// //   location: {
// //     city: 'Te',
// //     country: 'Uk'
// //   }
// // }).then(() => {
// //   console.log('Data is saved!')
// // }).catch((e) => {
// //   console.log('This failed: ', e);
// // });

// // database.ref('isSingle').set(null);

// // database.ref().remove()
// //   .then(() => {
// //     console.log("Remove succeeded.")
// //   })
// //   .catch((e) => {
// //     console.log("Remove failed: " + e)
// //   });

// // database.ref().update({
// //   stresslevel: 9,
// //   'job/company': 'Amazon',
// //   'location/city': 'Seattle'
// // });