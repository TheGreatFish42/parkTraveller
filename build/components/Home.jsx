export default Home 
import { Link } from "react-router-dom"

function Home(){
    return(
        <div className="home">
            <h1>Welcome Travelers!</h1>
            <Link to="/locations">
                <button>Find Your Next Adventure!</button>
            </Link>
        </div>
    )
}