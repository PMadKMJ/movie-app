import React, {Component} from 'react';
import './Movie.css';
import PropTypes from 'prop-types'; // ES6


function Movie({title, image, genres, synopsis, index}){
    return (
        <div className="Movie">
           <div className="MovieColoumn">
                <MoviePoster image={image}/>
            </div>
            <div className="MovieColoumn">
                <h1>{title}</h1>
                <div className="MovieGenres">
                    {genres.map(genre => <MovieGenres genre={genre} key={index} />)}
                </div>
                <p className="MovieSynopsis">
                    {synopsis}
                </p>
            </div>
        </div>
    )
}

function MoviePoster({image, title}){
    return (
        <img src={image} art={title} className="MoviePoster"/>
    ) 
}

function MovieGenres({genre}){
    return(
        <span className="MovieGenres">{genre}</span>
    )
}

Movie.PropTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    genres : PropTypes.array.isRequired,
    synopsis : PropTypes.string.isRequired
}

export default Movie;

