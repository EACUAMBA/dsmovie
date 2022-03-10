import Pagination from "../../components/Pagination";
import MovieStar from "../../components/MovieStar";
import MovieScore from "../../components/MovieScore";
import MovieCard from "../../components/MovieCard";

function Listing() {
    return(
        <>
            <Pagination/>

            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-sm-6 col-lg-4 col-xl-4 mb-3'}>
                        <MovieCard/>
                    </div>

                </div>
            </div>



            <MovieCard/>

        </>
    )
}
export default Listing;