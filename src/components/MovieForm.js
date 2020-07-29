import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {
  addMovie,
  updateMovie,
  findMovie,
  loadMovies,
} from '../store/actions/actions';
import { fakeApi } from '../fakeApi';

const MovieForm = () => {
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [duration, setDuration] = useState('');
  const [search, setSearch] = useState('');

  const movies = useSelector((state) => state.movies);

  const style = {
    width: '50%',
    margin: ' 0 50px',
  };
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalMovie = {
      name,
      rating,
      duration,
    };

    const findName = movies.filter((movie) => movie.name === name);
    if (findName.length > 0) {
      dispatch(updateMovie(findName[0].id, finalMovie));
    } else {
      console.log('vlese');
      dispatch(addMovie(finalMovie));
    }

    setName('');
    setRating('');
    setDuration('');
    setSearch('');
  };
  const onKeyUp = (e) => {
    
    dispatch(findMovie(search));

    if (search === '') {
      dispatch(loadMovies(fakeApi));
    }
  
  };

  return (
    <div className="movie-form" style={style}>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label className="font-weight-bold">Movie Name</Label>
          <Input
            type="text"
            name="movie-name"
            id="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Add Name"
          />
        </FormGroup>
        <FormGroup>
          <Label className="font-weight-bold">Rating</Label>
          <Input
            type="text"
            name="movie-rating"
            onChange={(e) => setRating(e.target.value)}
            value={rating}
            id="rating"
            placeholder="Add Rating"
          />
        </FormGroup>
        <FormGroup>
          <Label className="font-weight-bold">Duration</Label>
          <Input
            type="text"
            name="movie-duration"
            onChange={(e) => setDuration(e.target.value)}
            value={duration}
            id="duration"
            placeholder="Add Duration"
          />
        </FormGroup>
        <Button size="sm" onSubmit={handleSubmit} color="primary">
          Submit
        </Button>
      </Form>
      <FormGroup style={{marginTop:"50px"}}>
        <Label className="font-weight-bold">Search</Label>
        <Input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          onKeyUp={onKeyUp}
          value={search}
          id="search"
        />
      </FormGroup>
    </div>
  );
};

export default MovieForm;
