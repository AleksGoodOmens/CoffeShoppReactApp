import AboutOurBeans from "../../components/aboutOurBeans/AboutOurBeans";
import Divider from "../../components/decor/divider";
import FilterSection from "../../components/filterSection/filterSection";
import PageTitle from "../../components/pageTitle/pageTitle";

import "./ourCoffeePage.scss"





const OurCoffeePage = ({ data ,cards, changePage, setCurrentItem }) => {

  const { pageTitle, img, sectionTitle, text, filterSection} = data;

  return (
    <>
      <PageTitle articleClazz={"our-coffee"} content={pageTitle} />
      <AboutOurBeans sectionTitle={sectionTitle} text={text} img={img} />
      <Divider />
      <FilterSection filterSection={filterSection} cards={cards} changePage={changePage} setCurrentItem={setCurrentItem } />
    </>

    )
}
export default OurCoffeePage;
