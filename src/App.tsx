import React from 'react';
import './App.css';

import { Course } from "./components/Course";

const course = {
  name: "Curso de Frontend Developer",
  img: "https://static.platzi.com/media/achievements/badge-curso-frontend-developer-825407d1-49b1-4c9b-90c4-eee793720ede.png",
  teacher: {
    name: 'Estefany Aguilar',
    img: "https://static.platzi.com/media/avatars/avatars/teffcode_95d6f7fd-4ed8-4b7f-8ca2-6b732c2ec29b.jpg"
  },
  rating: 5,
  date: new Date(),
  classes: 20,
  level: "Avanzado"  ,
  addToPath: () => console.log('Path'),
  addToFavorite: () => console.log('Path')
}


function App() {
  return (
    <div className="App">
        <Course {...course}  />
    </div>
  );
}

export default App;
