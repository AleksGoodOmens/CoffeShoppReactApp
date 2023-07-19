import "./cards.scss";

import App from "../../App";

const Cards = (props) => {

  let items = props.cards.map(item => {
    const { image, name, price, key, origin } = item;
    const onCardOpen = () => {
      if (props.changePage) {
        console.log(key)
        props.setCurrentItem(key)
        props.changePage(4)
      }
    }
    if (props.withOrigin) { 
      return (
          <button className="card" key={key} onClick={()=> {onCardOpen({key})}}>
            <div className="card__img"><img src={require("./images/" + image)} alt={origin} /></div>
            <div className="card__body">
              <p className="card__text">{name}</p>
              <p className="card__text">{origin}</p>
              <p className="card__text card__price">{price}</p>
            </div>
          </button>
      )
    }
    return (
        <button  className="card" key={key} onClick={(e)=> {onCardOpen(e)}}>
          <div className="card__img">
            <img src={require("./images/" + image)} alt={origin} />
          </div>
          <div className="card__body">
            <p className="card__text">{name}</p>
            <p className="card__text card__price">{price}</p>
          </div>
        </button>
    )
  })
  return items
}
export default Cards;