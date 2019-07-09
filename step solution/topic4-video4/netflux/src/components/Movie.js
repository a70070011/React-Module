import React from 'react';

const Movie = props => {
    return (
      <li className="movie">
        <a href="#">
          <img src={props.image} alt="poster cover" />
          <span className="movie-description">
            {props.title}
						<span className="play-icon"><i className="fas fa-play"></i></span>
          </span>
        </a>
      </li>
    );
}

export default Movie;