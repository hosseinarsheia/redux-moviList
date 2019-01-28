import React from 'react'
import {connect} from 'react-redux'

const MovieDetails = (props) => {
    if(!props.selectedMovei){
        return <div>please select a movies</div>
    }
  return (
    <div>
      <p>Title:{props.selectedMovei.title}</p>
      <p>Realase Date : {props.selectedMovei.releaseDate}</p>
      <p>Rate : {props.selectedMovei.rating}</p>
    </div>
  )
}
const mapState = state => {
    return {selectedMovei : state.selectedMovie}
}
export default connect(mapState)(MovieDetails)
