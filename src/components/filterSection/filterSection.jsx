import { Component } from "react";
import Cards from "../cards/cards";

import "./filterSection.scss"

class FilterSection extends Component {
  constructor(props) {
    const uniqueOrigins = Array.from(new Set(props.cards.map(item => item.origin)));
    super(props);
    this.state = {
      captions: props.filterSection.captions,
      placeholder: props.filterSection.placeholder,
      cards: props.cards,
      filteredCards: props.cards,
      origin: uniqueOrigins
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.filterSection !== this.props.filterSection) {
      const uniqueOrigins = Array.from(new Set(this.props.cards.map(item => item.origin)));
      this.setState({
        captions: this.props.filterSection.captions,
        placeholder: this.props.filterSection.placeholder,
        cards: this.props.cards,
        filteredCards: this.props.cards,
        origin: uniqueOrigins
      });
    }
  }


  sortByClick = (e) => {
    document.querySelectorAll(".filter__btn").forEach(btn => {
      btn.classList.remove("btn__active");
    })
    const origin = e.target.textContent;
    e.target.classList.add("btn__active")
   
    const filteredCards = this.state.cards.filter(item => item.origin === origin);
    if (origin === "All") {
      return this.setState({ filteredCards: this.state.cards });
    }
    this.setState({ filteredCards: filteredCards });
  }

  sortByInput = (e) => {
    const btns = document.querySelectorAll(".filter__btns button")
    if (e.target.value.length > 0) {
      btns.forEach(btn => {
        btn.classList.remove("btn__active");
      })
      const filteredCards = this.state.cards.filter(item =>
        item.name.toLowerCase().includes(e.target.value.toLowerCase()));
      this.setState({ filteredCards: filteredCards });
      return
    } 
    btns.forEach((btn, index) => {
      console.log(index, btns.length)
      if (index+1 === btns.length) {
        btn.classList.add("btn__active");
      }
    })
    this.setState({ filteredCards: this.state.cards });

  }

  render() {
    const { captions, placeholder, filteredCards, origin } = this.state;
    const { text, filter } = captions;
    const btnFilters = origin.map((item, i) => {
      return <div><button className="filter__btn" onClick={(e)=> this.sortByClick(e)} key={i}>{item}</button></div>
    })

    return(
      <section className="filter">
        <header className=" filter__header container-sm">
          <label className="filter__label">
            <span>{ text}</span>
            <input className="filter__input-text" onChange={(e) =>this.sortByInput(e)} type="text" name="text" id="text" placeholder={placeholder.text} />
          </label>
          <label className="filter__label">
            <span>{filter}</span>
            <div className="filter__btns">
              {btnFilters}
              <button className="filter__btn btn__active" onClick={(e)=> this.sortByClick(e)}>All</button>
            </div>
          </label>
        </header>
        <section className="filter__cards container">
          <Cards cards={filteredCards} withOrigin changePage={this.props.changePage} setCurrentItem={this.props.setCurrentItem} />

        </section>
      </section>
    )
  }

}
export default FilterSection