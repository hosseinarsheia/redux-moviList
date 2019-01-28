
import React from 'react'
import {connect} from 'react-redux'
import {selected} from '../actions'

const MoveiList = (props) => {

    const listItems = props.movies.map(movie =>{
            return(
                <div key ={movie.title}>
                    <div >
                        <button className='btn mx-3 btn-info' onClick={() => props.selected(movie)}>Details</button>
                        <span>{movie.title}</span>
                    </div>
                    
                </div>
            )
        })
    


  return (
    <div>
      {listItems}
    </div>
  )
}

const mapStateToProps = state =>{
    console.log(state)
    return {movies: state.movies}
}

export default connect(mapStateToProps,{selected})(MoveiList)
