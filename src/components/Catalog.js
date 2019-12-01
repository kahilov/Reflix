import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Catalog extends Component {
  constructor() {
    super();
    this.state = {
      budget: 10
    };
  }
  handleRent = (e, id) => {
    let movieArr = [...this.props.state.catalog];
    if (this.state.budget == 1) {
      alert("No more money");
      return;
    }
    movieArr[id].isRented
      ? this.setState({ budget: this.state.budget + 3 })
      : this.setState({ budget: this.state.budget - 3 });
    this.props.handleRent(e, id);
  };
  changeSearch = e => { 
    console.log(e)
    this.props.changeSearch(e);
  };
  render() {
    let budget = this.state.budget;
    let state = this.props.state.catalog;
    let search = this.props.state.search;
    return (
      <div>
        Catalog :<span> Budget : {budget} $</span>
        <input
          placeholder="Search"
          value={search}
          onChange={this.changeSearch}
        ></input>
        <div >
          {state.map(m =>
            m.title.toLowerCase().includes(search) ? (
              <div className="container">
                <Link to={`/catalog/movie/${m.id}/`}>
                  <img className="img" src={m.img}></img>
                </Link>
                {m.isRented ? <button className="button" onClick= {(e)=>this.handleRent(e,m.id)}>Unrent</button> : <button className="button" onClick= {(e)=>this.handleRent(e,m.id)}>Rent!</button>}
              </div>
            ) : null
          )}
        </div>
        <div id="rented">
          {state.every(c => c.isRented == false) ? null : <div> Rented</div>}
          {state.map(m => (m.isRented ? <img className="img" src={m.img}></img> : null))}
        </div>
      </div>
    );
  }
}

export default Catalog;
