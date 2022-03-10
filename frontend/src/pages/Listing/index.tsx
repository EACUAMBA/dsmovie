import Pagination from "../../components/Pagination";
<<<<<<< HEAD
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
=======

function Listing() {
    return(
        <Pagination/>
>>>>>>> f90bc3f000c8e331a363bd29ba445b1a349db48a
    )
}
export default Listing;