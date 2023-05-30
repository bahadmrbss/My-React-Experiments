import React from "react";
import MovieCard from "./MovieCard";
import { Grid } from "semantic-ui-react";
import { HashLoader } from "react-spinners";

export default function MoviesList({ movieReducer }) {
  //console.log("MoveList Func Comp:::",props)
  const emptyMessage = <p>There are no movies yet.</p>;
  const moviesList = movieReducer.error.response ? (
    <h3>Error retrieving data!</h3>
  ) : (
    //movieReducer.movies.map((movie) => (<MovieCard key={movie.id} movie={movie} />))
    <Grid>
      <Grid.Row columns={3}>
        {movieReducer.movies.map((movie) => {
          return (
            <Grid.Column key={movie.id} style={{ marginBottom: "15px" }}>
              <MovieCard movie={movie} />
            </Grid.Column>
          );
        })}
      </Grid.Row>
    </Grid>
  );
  return (
  <div>
    <HashLoader size={40} color="red" loading={movieReducer.fetching} />
    {movieReducer.length === 0 ? emptyMessage : moviesList}
  </div>);
}
