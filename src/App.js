import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import MovieForm from './components/MovieForm';
import store from './store/store';
import RenderMovies from './components/RenderMovies';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
      <h1
        style={{
          marginBottom: '50px',
          textAlign: 'center',
        }}
      >
        Movie Rating
      </h1>
      <Fragment>
        <MovieForm />
        <RenderMovies />
      </Fragment>
    </Provider>
  );
}

export default App;
