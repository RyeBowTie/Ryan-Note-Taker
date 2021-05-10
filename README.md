# Ryan-Note-Taker

# Description 

A simple note taking app that uses a .json file to store and persist data. 

1. Users are first brought to a landing page. 

![1](https://user-images.githubusercontent.com/74829094/117705181-bd5c7d80-b199-11eb-8797-3a40ca42a7a7.png)


2. When the "Get Started" button is pressed users are brought to the main note screen.

![2](https://user-images.githubusercontent.com/74829094/117705190-bfbed780-b199-11eb-9904-ded4dfcd2319.png)


3. Users can then enter a title and the text of their notes. 

![3](https://user-images.githubusercontent.com/74829094/117705202-c51c2200-b199-11eb-8a4c-5a8a8f5836da.png)

4. Once the save button is pressed the note is saved in a .json file.

![4](https://user-images.githubusercontent.com/74829094/117705216-cbaa9980-b199-11eb-8dab-cf70721a5690.png)

5. When the user refreshes, starts a new session, or uses a new devices the data persists. 

![5](https://user-images.githubusercontent.com/74829094/117705238-d107e400-b199-11eb-9c7c-fa3727c6050c.png)

6. JSON objects can be viewed using the /api/notes route. All notes are given a unique id using the uniqid npm which will be used when delete functions are added. 

![6](https://user-images.githubusercontent.com/74829094/117705254-d6652e80-b199-11eb-89b7-3c8b896d3a7d.png)
