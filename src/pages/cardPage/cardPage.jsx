

import AboutOurBeans from "../../components/aboutOurBeans/AboutOurBeans"
import PageTitle from "../../components/pageTitle/pageTitle"

import "./cardPage.scss"

const CardPage = (props) => {
  const item = props.cards[props.currentItem -1];
  const {descriptions, image, name , origin, price} = item
  return (
    <article className="cardPage">
     <PageTitle content="Our Coffee" />
      <AboutOurBeans sectionTitle={name} text={ descriptions} img={image} origin={origin} price={price} /> 
      
    </article>
    
  )
}
export default CardPage