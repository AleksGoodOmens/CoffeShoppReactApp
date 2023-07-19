import Cards from "../cards/cards";
import SectionTitle from "../sectionTitle/sectionTitles";
import "./ourBest.scss"

const OurBest = ({ cards, ourBest,changePage, setCurrentItem }) => {
  const bestGoods = cards.filter(item => {
    if (item.best === true) {
      return item
    }
    return null
  })

  return (
    <section className="our-best">
      <SectionTitle content={ourBest.name}/>
      <div className="container">
        <div className="our-best__items" >
          <Cards cards={bestGoods} changePage={changePage} setCurrentItem={setCurrentItem } />
        </div>
      </div>
    </section>
  )
}

export default OurBest;