
import React from 'react'

export default function MoviesList({movies}) {
    //console.log("MoveList Func Comp:::",props)
    const emptyMessage = <p>There are no movies yet.</p>
    const moviesList = <div>Movies List</div>
  return (
    <div>{movies.length === 0 ? emptyMessage : moviesList}</div>
  )
}