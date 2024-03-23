import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setUpcoming, settitle, setLatestImages,setidofmovie } from '../action';
import './Movies.css'; // Import CSS file for styling
import MovieDetail from './MovieDetail';
import HamburgerNavbar from '../components/navbar/Navbar';
import { BrowserRouter, Routes, Route,useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
Link
function Movies() {
    const dispatch = useDispatch();
    const imageUrls = useSelector(state => state.upcomingImages);
    const imagesTitle = useSelector(state => state.imagesTitle);
    const latestImages = useSelector(state => state.latestImages);
    var imageurls = 'https://image.tmdb.org/t/p/w500';
    const navigate = useNavigate();
    useEffect(() => {

        console.log(latestImages);
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
                const ID = results.map(result => result.id);

                dispatch(setLatestImages(ID));
                const urls = results.map(result => result.poster_path);

                console.log(urls);
                const title = results.map(result => result.title);
                dispatch(setUpcoming(urls));
                dispatch(settitle(title));
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, [dispatch]);

    const handleDetail = (IDsof) => {
        // Call a function to handle the movie detail based on the index
        // For now, let's just log the index to the console
        console.log('Movie index:', IDsof);

     dispatch(setidofmovie(IDsof));

     
     navigate("/MoviesDetails");

    }

    return (

        <> 
        <div><HamburgerNavbar/></div>
        
        <div className="movies-container">

           
            <div className="gallery">
                {/* Render the images using the array of image URLs */}



                {latestImages.map((IDsof, idindex) => (

                    < >   {imageUrls.map((url, index) => (
                        idindex === index && 
                        <div key={index} className="movie-container">
                           
                          
                          <div>


                          <img
                                 id='images-on'
                                className='movie-image'
                                onClick={() => handleDetail(IDsof)} // Pass the index to the handleDetail function
                                src={imageurls + url}
                                alt={`Image ${index + 1}`}
                            />
                         
                            {imagesTitle.map((title, titleIndex) => (
                                // Add a condition to render the title only if the index matches
                                index === titleIndex && <span key={titleIndex} className="movie-title">{title}</span>
                            ))}

                          </div>
                         
                          
                           

                        </div>
                    ))}</>
                    ))}
                
            </div>
        </div>
        </>
    );
}

export default Movies;
