import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  state = {

  }

  componentDidMount(){
   this._makeMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie) => {
      console.log(movie)
      return <Movie 
        title={movie.title} 
        image={movie.medium_cover_image} 
        key={movie.id} 
        genres={movie.genres}
        synopsis={movie.synopsis}
        />
    })
    return movies
  }

  _makeMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }

  _callApi = async () => {
    try {
      const response = await fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating');
      const json = await response.json();
      return json.data.movies;
    }
    catch (err) {
      return console.log(err);
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
