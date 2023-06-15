
import React from 'react'
import './App.css';
import Hero from './components/hero';
import './components/Hero.css';

const heroes = [
  {
    "color": "blue",
    "name": "Безлимитный 300",
    "price": "300",
    "speed": "до 10 Мбит/сек",
    "Info": "Объём включенного трафика не ограничен",

  },
  {
    "color": "green",
    "name": "Безлимитный 450", 
    "price": "450",
    "speed": "до 50 Мбит/сек",
    "Info": "Объём включенного трафика не ограничен",
  },
  {
    "color": "red",
    "name": "Безлимитный 550",
    "price": "550",
    "speed": "до 100 Мбит/сек",
    "Info": "Объём включенного трафика не ограничен",
  },
  {
    "color": "black",
    "name": "Безлимитный 1000",
    "price": "1000",
    "speed": "до 200 Мбит/сек",
    "Info": "Объём включенного трафика не ограничен",
  },
  
];

class App extends React.Component {
  render () {
  return (
    <div className="App">
      {
        heroes.map ((hero) =>
        <Hero name = {hero.name} price = {hero.price} speed = {hero.speed} info = {hero.Info} color = {hero.color}> </Hero>
        )
      }
    </div>
  );
}
}
export default App;
