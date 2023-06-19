import './Rate.css';

function Rate (props) {
    const cardClass = `rate-card ${props.color}-card`
    const selected = props.selected;
    let selectedStyle;
    selected && (selectedStyle = 'selected')
    return (
        <section className={`Rate ${selectedStyle}`}>
            <div className = {cardClass}>
            
            <div className='rate-name'> {props.name}</div>
            <p> <sup> <span>руб</span></sup> {props.price} <sub><span>/мес</span></sub></p>
            <div className='rate-speed'> {props.speed}</div>
            <div className='rate-info'> 
            Объём включенного <br/>
            трафика не ограничен
            </div>
        </div>
        </section>
        
    );
    }    

    export default Rate;