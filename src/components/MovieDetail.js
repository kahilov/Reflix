import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Catalog from "./Catalog";

class MovieDetail extends Component {
  render() {
    const id = this.props.match.params.movieDetail;
    const catalog = this.props.state.catalog;
    const movie = catalog[id];
    return (
      <div>
        <h1>
          {movie.title} - {movie.year}
        </h1>
        <img src={movie.img}></img>
        <h2>{movie.descrShort}</h2>
      </div>
    );
  }
}

export default MovieDetail;
