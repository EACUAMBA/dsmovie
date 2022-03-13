import Pagination from "../../components/Pagination";
import MovieCard from "../../components/MovieCard";
import axios from "axios";
import {useEffect, useState} from "react";
import {MoviePage} from "../../types/movie";
import {BASE_URL} from "../../utils/requests";

function Listing() {

    const [pageNumber, setPageNumber] = useState(0);
    const [page, setPage] = useState<MoviePage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 0,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true,
    });
    useEffect(()=>{
        axios.get(`${BASE_URL}/movies?size=12&page=0${pageNumber}&sort=title`)
            .then(response => {
                const data = response.data as MoviePage;
                setPage(data);
            })
    }, [pageNumber]);

    const handlePageChange = (newPageNumber : number)=>{
        setPageNumber(newPageNumber);
    }


    return (
        <>
            <Pagination page={page} onChange={handlePageChange}/>
            <div className={'container'}>
                <div className={'row'}>
                    {
                        page.content.map((movie)=>{
                            return (
                                <div className={'col-sm-6 col-lg-4 col-xl-4 mb-3'} key={movie.id}>
                                    <MovieCard movie={movie} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Listing;