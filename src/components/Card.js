import './css/Card.css'

import katie_zaferes from '../images/katie-zaferes.png'
import star from '../images/star.png'

function Card(props){
    console.log(props.item.coverImg);
    return(
        <div className='card'>
            <img src={`../images/${props.item.coverImg}`} className='card-image' />
            <div className='card-stats'>
                <img src={star} className='card-star'/>
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p className='card-title'>{props.item.title}</p>
            <p className='card-price'><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}

export default Card