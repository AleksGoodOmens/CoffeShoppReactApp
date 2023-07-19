import "./AboutOurBeans.scss"

import About from "../about/about"

const AboutOurBeans = ({ sectionTitle="default section title", img, text, price, origin }) => {
  if (price && origin) {

    const alt = `${origin} ${price} ${img} `
    return (
      <section className="container container-sm about-beans">
        <figure className="about-beans__photo">
          <img src={require("../cards/images/" + img)} alt={alt} />
        </figure>
        <About sectionTitle={sectionTitle} text={text} price={price} origin={origin} />
      </section>
    )
  }
  
  
  if (img.name) {
    return (
    
    <section className="container container-sm about-beans">
      <figure className="about-beans__photo">
        <img src={require("../../pages/forYourPleasure/imgs/" + img.name)} alt={img.alt} />
      </figure>
      <About sectionTitle={sectionTitle} text={text} />
    </section>
    )
  }

  return (
    <section className="container container-sm about-beans">
      <figure className="about-beans__photo">
        <img src={require("./images/" + img)} alt="Girl drink coffee cup" />
      </figure>
      <About sectionTitle={sectionTitle} text={ text} />
    </section>
  )
}
export default AboutOurBeans

// 