import '../CSS/Center.css'
import littleIce1 from '../Assets/img/ice copy 6.png'
import littleIce2 from '../Assets/img/ice copy 4.png'
import middleIce from '../Assets/img/ice copy 5.png'
import bigIce from '../Assets/img/ice copy 3.png'

export const Center = () => {
    return(
        <div className="second">
            <img src={littleIce1} className="second__ice1 ice" alt=""/>
            <img src={littleIce2} className="second__ice2 ice" alt=""/>
            <img src={middleIce} className="second__ice3 ice" alt=""/>
            <img src={bigIce} className="second__ice4 ice" alt=""/>
            <p className="second__header">Основа терапии —
            патогенез СД2</p>
        </div>
    )
}