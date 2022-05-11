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
                return res.send(400,'Not Found');
            }
            return res.send(doc.data());
        })
        .catch(err => {
            return res.send(400, 'Error getting document');
        });
});

app.post('/', (req, res) => {
    let name = req.body.name;
    if(name == null) return res.send(400, "no name");
    else{
       docRef.get()
        .then(doc => {
            if (!doc.exists) {
                return res.send(400,'Not Found');
            }
            var data = doc.data();
            if(data[name] != null){
                return res.send(400, name+" is in the list");
            }
            data[name] = false;
            docRef.set(data).then(() => {
                return res.send(data);
            });
        })
        .catch(err => {
            return res.send(400, 'Error getting document');
        }); 
    }
});

app.put('/', (req, res) => {
    let originalName = req.body.originalName;
    let changeName = req.body.changeName;
    let changeValue = req.body.changeValue;
    if(originalName == null) return res.send(400, "no originalName");
    else if(changeName == null && changeValue == null) return res.send(400, "no changeName and changeValue");
    else{
       docRef.get()
        .then(doc => {
            if (!doc.exists) {
                return res.send(400,'Not Found');
            }
            var data = doc.data();
            if(data[originalName] == null){
                return res.send(400, originalName+" not in the list");
            }
            if(data[changeName] != null){
                return res.send(400, changeName+" is in the list");
            }else{
                let value;
                if(changeValue == null) value = data[originalName];
                else value = changeValue;

                let name;
                if(changeName == null) name = originalName;
                else name = changeName;
                delete data[originalName];
                data[name] = value;

                docRef.set(data).then(() => {
                    return res.send(data);
                });
            }
        })
        .catch(err => {
            return res.send(400, 'Error getting document');
        }); 
    }
});

exports.todo = functions.https.onRequest(app);