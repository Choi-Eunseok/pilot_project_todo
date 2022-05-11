const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const admin = require('firebase-admin');

admin.initializeApp();
const db = admin.firestore();
const docRef = db.collection('Todo').doc('list');

app.use(cors({ origin: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    docRef.get()
        .then(doc => {
            if (!doc.exists) {
                return res.send('Not Found');
            }
            return res.send(doc.data());
        })
        .catch(err => {
            return res.send('Error getting document', err);
        });
});

exports.todo = functions.https.onRequest(app);