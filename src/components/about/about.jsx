import "../../styles/variables/variables.scss"
import "./about.scss"
import Decor from "../decor/decor"
import SectionTitle from "../sectionTitle/sectionTitles"

const About = ({ text, sectionTitle, price, origin }) => {
  if (typeof (text) === "string") {
    return (
      <article className="about">
        <div className="about__container">
          <SectionTitle clazz={"about__title"}  content={sectionTitle}/>
          <Decor dark={true} />
          <section className="about__text cardPage">
            <p>country: <b>{origin}</b></p>
            <p>{text}</p>
            <p>Price: <b className="fz24rem">{ price}</b></p>
          </section>
        </div>
      </article>
    )
  }

  
  let content = text.map((item, i) => {
    if (item.p) {
      return (
        <p key={i}>{item.p}</p>
      )
    }
    return (
      <p key={i}>{item}</p>
    )
  })
  return (
    <article className="about">
      <div className="about__container">
        <SectionTitle clazz={"about__title"}  content={sectionTitle}/>
        <Decor dark={true} />
        <section className="about__text">
        {content}
        </section>
      </div>
  </article>
)
}
export default About