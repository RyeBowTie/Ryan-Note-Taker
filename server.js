
const fs = require('fs');
const express = require('express');
const path = require('path');
const db = require('./db/db.json');
const uniqid = require('uniqid');
const notesArray = require('./noteList')
const app = express();
const PORT = process.env.PORT || 3000;

const readFile = () => {
    fs.readFile('./db/db.json', 'utf-8', function(err, data) {
    if (err) throw err
        var arrayOfObjects = JSON.parse(data)
        if (arrayOfObjects.length > 0) {
            for (let i = 0; i < arrayOfObjects.length; i++){
                notesArray.push(arrayOfObjects[i]);
            }
        }
    });
};

const writeFile = (notesArray) => {
    fs.writeFile('./db/db.json', JSON.stringify(notesArray), (err) =>
    err ? console.error(err) : console.log('Success!')
    );    

}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'public/notes.html')));
app.get('/api/notes', (req, res) => res.json(db));
app.post('/api/notes', (req, res) => {
    res.json(notesArray);

    let noteListItems = req.body;
    noteListItems.id = uniqid();
    notesArray.push(noteListItems)
    writeFile(notesArray);
  });


readFile();

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));