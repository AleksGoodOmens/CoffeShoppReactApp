import Decor from "../decor/decor"
import Navigation from "../navigation/navigation"
import "./footer.scss"
const Footer = (props) => {
  
  return (
    <footer className="footer">
      <Navigation buttons={props.buttons} nav={props.nav} changeLang={props.changeLang} changePage={ props.changePage} />
      <Decor dark={true}/>
  </footer>
  )
}
export default Footer