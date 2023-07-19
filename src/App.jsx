import { Component } from "react";

import  db from "./db/db"

import Navigation from "./components/navigation/navigation";

import PromoPage from "./pages/promoPage/promoPage";
import OurCoffeePage from "./pages/ourCoffeePage/ourCoffeePage";
import ForYourPleasurePage from "./pages/forYourPleasure/forYourPleasure";

import Footer from "./components/footer/footer";
import CardPage from "./pages/cardPage/cardPage";

import WOW from "wow.js";

new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
).init()


class App extends Component {
  constructor(props) {
    super(props);
    const { eng, rus, esp } = db
    this.state = {
      eng,
      rus,
      esp,
      language: "eng",
      currentPage: 1,
      currentItem: 1,
      animated: "wow"
    }
  }

  setLanguage = () => {
    if (localStorage.language) {
      switch (localStorage.language) {
        case "rus":
          this.setState({ language: "rus" });
          break;
        case "eng":
          this.setState({ language: "eng" });
          break;
        case "esp":
          this.setState({ language: "esp" });
          break;
        default:
          console.log(localStorage.language);
      }
    }
  };
  setCurrentItem = (idNum =1) => {
    this.setState({currentItem: idNum})
  }

  changeLang = (e) => {
    if (e) {
      switch (e.target.textContent) {
        case "rus":
          localStorage.setItem("language", "rus");
          this.setState({ language: "rus" });
          break;
        case "eng":
          localStorage.setItem("language", "eng");
          this.setState({ language: "eng" });
          break;
        case "esp":
          localStorage.setItem("language", "esp");
          this.setState({ language: "esp" });
          break;
        default:
          this.setState({ language: "eng" });
          break;
      }
    } else {
      console.log("else");
      return this.state.eng;
    }
  };
  componentDidMount() {
    if (localStorage.language) {
      switch (localStorage.language) {
        case "rus":
          this.setState({ language: "rus" });
          break;
        case "eng":
          this.setState({ language: "eng" });
          break;
        case "esp":
          this.setState({ language: "esp" });
          break;
        default:
          console.log(localStorage.language);
      }
    }
  }

  changePage = (pageName, e) => {
    if (e !== undefined) {
      e.preventDefault();
    }
    this.setState({currentPage: pageName})
  }

  LoadedPage = ({ promoPage, cards, forYourPleasurePage, ourCoffeePage }) => {
    switch (this.state.currentPage) {
      case 1:
        return <PromoPage language={this.state.language} promoPage={promoPage} cards={cards} changePage={this.changePage} setCurrentItem={this.setCurrentItem } />;
      case 2:
        return <OurCoffeePage data={ourCoffeePage} cards={cards} changePage={this.changePage} setCurrentItem={this.setCurrentItem } />;
      case 3:
        return <ForYourPleasurePage forYourPleasurePage={forYourPleasurePage} cards={cards} changePage={this.changePage} setCurrentItem={this.setCurrentItem } />;
      case 4:
        console.log(this.state.currentItem);
        return <CardPage currentItem={this.state.currentItem} cards={cards} />;
      default:
        return <PromoPage language={this.state.language} />;
    }
  }

  
  render() {
    const data = this.state[this.state.language];
    const { nav, buttons, promoPage, cards, forYourPleasurePage, ourCoffeePage } = data;
    return(
      <div className="wrapper ">
        <Navigation buttons={buttons} nav={nav} changeLang={this.changeLang} changePage={this.changePage} />
        <main>
          {this.LoadedPage({promoPage , cards, forYourPleasurePage, ourCoffeePage,})}
        </main>
        <Footer buttons={buttons} nav={nav} changeLang={this.changeLang} changePage={this.changePage} />
    </div>
    )
  }
    
  
  
}

export default App;
