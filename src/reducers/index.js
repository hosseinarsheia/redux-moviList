import {combineReducers} from 'redux'
const movieReducers = () =>{
    return [
        {title:'speder-man', releaseDate: '05-07-2017' , rating : '7.4'},
        {title:'aquaman', releaseDate: '12-07-2018' , rating : '7'},
        {title:'black panther', releaseDate: '02-13-2018' , rating : '7.4'},
        {title:'avengers', releaseDate: '04-25-2018' , rating : '8.3'},
        {title:'guardian of galaxy', releaseDate: '07-30-2014' , rating : '7.9'}
    ]
}


const selectedMovie = (state = null, action) =>{
    if(action.type === 'MOVIE-_SELECTED'){
        return action.payload
    }
    return state
}


export default combineReducers({
    movies : movieReducers,
    selectedMovie: selectedMovie
})