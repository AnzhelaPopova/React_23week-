
import React from 'react'
import './App.css';
import Rate from './components/rate';
import './components/Rate.css';

const rates = [
  {
    "color": "blue",
    "name": "Безлимитный 300",
    "price": "300",
    "speed": "до 10 Мбит/сек",
  },
  {
    "color": "green",
    "name": "Безлимитный 450", 
    "price": "450",
    "speed": "до 50 Мбит/сек",
  },
  {
    "color": "red",
    "name": "Безлимитный 550",
    "price": "550",
    "speed": "до 100 Мбит/сек",
    "selected":"true",
  },
  {
    "color": "black",
    "name": "Безлимитный 1000",
    "price": "1000",
    "speed": "до 200 Мбит/сек",
  },
  
];

class App extends React.Component {
  render () {
  return (
    <div className="App">
      {
        rates.map ((rate) =>
        <Rate 
        name = {rate.name} 
        price = {rate.price} 
        speed = {rate.speed} 
        info = {rate.Info} 
        color = {rate.color}> </Rate>
        )
      }
    </div>
  );
}
}
export default App;
