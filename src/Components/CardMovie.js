
import "./CarStyle.css"
function MovieCard({movie}){
    return (
        <div className="card">
         <img src={movie.posterURL} alt="movie"/>
         <div className="container">
            <h5>{movie.title}</h5>
            <span>{"⭐".repeat(movie.rating)}</span>
         </div>
        </div>
    )
}
export default MovieCard;