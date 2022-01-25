import React from 'react';
import PropsTypes from 'props-types';

function Movie({id, title, year, summary, poster}){
  return (<h4>{title}</h4>);
}

Movie.propsTypes = { 
  id: PropsTypes.number.isRequired,
  year: PropsTypes.number.isRequired,
  title: PropsTypes.string.isRequired,
  summary: PropsTypes.string.isRequired,
  poster: PropsTypes.string.isRequired,
 };

export default Movie;
