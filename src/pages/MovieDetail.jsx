import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { setfilter } from '../action.jsx';
import { useSelector, useDispatch } from 'react-redux';
import HamburgerNavbar from '../components/navbar/Navbar.jsx';
import './MoviesDetails.css'
function MovieDetail() {
    const dispatch = useDispatch();
    const imagefilter = useSelector(state => state.image_filter);
    const MoviesID = useSelector(state => state. Id_Movie);
    console.log(MoviesID);
   
   
    var imageurls = 'https://image.tmdb.org/t/p/w500';
    useEffect(() => {


        const options = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/movie/popular',
            params: { language: 'en-US', page: '2' },
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzViOTFiNWIzOTY1OWEyZTk1NjkwNmY2OTFhNjI0NyIsInN1YiI6IjY1ZTFkZjc0YTgwNjczMDE2MWE5NWIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6aoqW1OjDHjRggqC1DmZe7p966kv4Q9oApCq5JUbYpI'
            }
        };

        axios
            .request(options)
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });



        async function fetchData() {
            try {
                const response = await axios.request(options);
                const results = response.data.results;
                console.log(results);
                const ID = results.filter(result => result.id == MoviesID);
                console.log(ID);

                dispatch(setfilter(ID));

            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, [dispatch]);

    console.log(imagefilter)

    return (
        <div>



{imagefilter !== null && imagefilter.map((filter) => (
    <div className="movie-container">
        <div className="image-container">
            <img src={imageurls + filter.poster_path} alt={filter.original_title} className="movie-image" />
        </div>
        <div className="details-container">
            <div className="title">{filter.original_title}</div>
            <div className='overview'>OverView</div>
            <div className="description">{filter.overview}</div>
            <div className="footer">
                <div className="release-date"><span className='release-date-span' >Release Date :</span>  {filter.release_date}</div>
                <div className="vote-average"><span className='release-date-span'> Average Vote :</span> {filter.vote_average}</div>
                <div className="release-date"><span className='release-date-span'>Popularity :</span> {filter.popularity}</div>
                <div className="vote-average"><span className='release-date-span'>Original Language :</span> {filter.original_language}</div>
                <div className="vote-average"><span className='release-date-span'>Origional Title :</span> {filter.original_title}</div>
            </div>
        </div>
    </div>
))}




        </div>
    )
}

export default MovieDetail