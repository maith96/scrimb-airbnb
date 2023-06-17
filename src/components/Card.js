import './css/Card.css'

import katie_zaferes from '../images/katie-zaferes.png'
import star from '../images/star.png'

function Card(){
    return(
        <div>
            <img src={katie_zaferes} className='card-image' />
            <div className='card-stats'>
                <img src={star} className='card-star'/>
                <span>5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
            </div>
        </div>
    )
}

export default Card