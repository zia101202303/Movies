import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setUpcoming} from '../action';

function UpComing() {
    const dispatch = useDispatch();
    const imageUrls = useSelector(state => state.upcomingImages);

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming',
            headers: {
                'X-RapidAPI-Key': '8a5b1df469msh546981f233d8e8bp16b1acjsn428914c509ac',
                'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
            }
        };

        async function fetchData() {
            try {
                const response = await axios.request(options);
                console.log(response);
                const results = response.data.results;
                console.log(results);
                const urls = results.map(result => result.primaryImage && result.primaryImage.url).filter(Boolean);
                dispatch(setUpcoming(urls));
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, [dispatch]);

    return (
        <>
            <div>
                <div className="gallery">
                    {/* Render the images using the array of image URLs */}
                    {imageUrls.map((url, index) => (
                        <img key={index} src={url} alt={`Image ${index + 1}`} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default UpComing;
