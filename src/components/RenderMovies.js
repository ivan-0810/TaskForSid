import React, { useEffect } from 'react';
import { loadMovies } from '../store/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { fakeApi } from '../fakeApi';
const RenderMovies = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(loadMovies(fakeApi));
  }, [dispatch]);

  const style = {
    display: 'flex',
    margin: '50px',
  };
  const fontWieght = {
    fontWeight: 'bold',
  };

  return (
    <div className="RenderMovies" style={style}>
      <div className="name" style={{ marginRight: '50px' }}>
        <p style={fontWieght}>Name</p>
        {movies.map((movie, inx) => (
          <p key={inx}>{movie.name}</p>
        ))}
      </div>
      <div className="rating" style={{ marginRight: '50px' }}>
        <p style={fontWieght}>Rating</p>
        {movies.map((movie, inx) => (
          <p key={inx + 10}>{movie.rating}</p>
        ))}
      </div>
      <div className="duration">
        <p style={fontWieght}>Duration</p>
        {movies.map((movie, inx) => (
          <p key={inx + 20}>{movie.duration}</p>
        ))}
      </div>
    </div>
  );
};

//   const mapStateToProps = state => ({
//     movies: state.movies
//   });
//   RenderMovies.propTypes = {
//     loadMovies: PropTypes.func.isRequired,

//   };

export default RenderMovies;
