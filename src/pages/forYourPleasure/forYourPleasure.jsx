import AboutOurBeans from "../../components/aboutOurBeans/AboutOurBeans";
import Cards from "../../components/cards/cards";
import Divider from "../../components/decor/divider";
import PageTitle from "../../components/pageTitle/pageTitle";

import "./forYourPleasurePage.scss";

const ForYourPleasurePage = ({ forYourPleasurePage, cards, changePage,setCurrentItem}) => {
  const { pageTitle, sectionAbout } = forYourPleasurePage;
  const { sectionTitle, img, text} = sectionAbout;
  return (

    <article className="forYourPleasurePage">
      <PageTitle clazz={"forYourPleasurePage__title"} content={pageTitle} />
      <AboutOurBeans sectionTitle={sectionTitle} img={img} text={text} />
      <Divider/>
      <section className="forYourPleasurePage__cards container">
        <Cards cards={cards} withOrigin={true}     changePage={changePage} setCurrentItem={setCurrentItem }/>
      </section>
    
    </article>
  )
}
export default ForYourPleasurePage;