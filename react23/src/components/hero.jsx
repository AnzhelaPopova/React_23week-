import './Hero.css';

function Hero (props) {
    const cardClass = `hero-card ${props.color}-card`
    return (
        <div className = {cardClass}>
            
            <div className='hero-name'> {props.name}</div>
            <p> <sup> <span>руб</span></sup> {props.price} <sub><span>/мес</span></sub></p>
            <div className='hero-superpowers'> {props.speed}</div>
            <div className='hero-info'> {props.info}</div>
        </div>
    );
    }    

    export default Hero;