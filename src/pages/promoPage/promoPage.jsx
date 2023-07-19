
import Buttons from "../../components/buttons/buttons";
import Decor from "../../components/decor/decor";
import About from "../../components/about/about";
import OurBest from "../../components/ourBest/ourBest";
import "./promoPage.scss";

const PromoPage = ({ promoPage, cards, changePage, setCurrentItem }) => {
  const { aboutUs, buttons, ourBest, pageSubtitle, pageTitle } = promoPage;

    return (
      <>
        <article className="promo-page wow">
          <section className="container">
            <h1 className="promo-page__title">{pageTitle}</h1>
            <Decor dark={false} />
            <h2 className="promo-page__subtitle">{pageSubtitle[0].name}</h2> 
            <h2 className="promo-page__subtitle">{pageSubtitle[1].name}</h2>
            <Buttons name={buttons.name} clazz={buttons.clazz} changePage={changePage} />
          </section>
        </article>
        <div className="about-us container">
          <About text={aboutUs.text} sectionTitle={aboutUs.pageTitle} />
        </div>
        <OurBest ourBest={ourBest} cards={cards} changePage={changePage} setCurrentItem={setCurrentItem} />
      </>
    );
  }

export default PromoPage;
