# Ryan-Note-Taker

# Description 

A simple note taking app that uses a .json file to store and persist data. 

1. Users are first brought to a landing page. 



2. When the "Get Started" button is pressed users are brought to the main note screen.



3. Users can then enter a title and the text of their notes. 

4. Once the save button is pressed the note is saved in a .json file.

5. When the user refreshes, starts a new session, or uses a new devices the data persists. 

6. JSON objects can be viewed using the /api/notes route. All notes are given a unique id using the uniqid npm which will be used when delete functions are added. 