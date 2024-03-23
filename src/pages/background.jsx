import React, { useState, useEffect } from 'react';
import './Background.css';

function Background() {
    const data = [
        'https://img.freepik.com/free-psd/movie-rusted-text-effect-wooden-background_47987-19172.jpg?w=740&t=st=1709313333~exp=1709313933~hmac=63fde64cd22c45e4ca8741475ace797e8f69f0e41efdca5fa76e9767600854d8',
        'https://img.freepik.com/free-psd/horror-video-game-3d-text-style-effect_1389-1568.jpg?w=740&t=st=1709313484~exp=1709314084~hmac=8d389d09740ce79c9083b85abf4aa413955fbc13fafa9e7c3551d18a0a1cd6a6',
        'https://img.freepik.com/free-psd/fire-text-style-effect_35913-2064.jpg?w=740&t=st=1709313529~exp=1709314129~hmac=53052d53d1732a4d4f8fa6baea8b266eaab61b38a6d23ce62fdbde286751ec52',
        'https://img.freepik.com/free-psd/dark-text-style-effect_35913-2205.jpg?w=740&t=st=1709313559~exp=1709314159~hmac=5f84b9acde21967e98d458722df631bf105ddb008f3599573126fe0a67bfe00b',
        'https://img.freepik.com/free-psd/cracks-3d-text-effect_106176-325.jpg?w=826&t=st=1709313590~exp=1709314190~hmac=91ff4e945186700d1ab36c7936d18ee3a5c42c161ef755fd3d09ced64ffb3497',
        'https://img.freepik.com/free-vector/real-kingdom-text-effect_17005-875.jpg?w=826&t=st=1709313620~exp=1709314220~hmac=3363c76a3af64d45627c9eb6c2b31e02fc68b4bb1f9bd14171779c669f42452f'
    ];

    const [randomImage, setRandomImage] = useState('');

    useEffect(() => {
        // Pick a random image from the array
        const randomIndex = Math.floor(Math.random() * data.length);
        setRandomImage(data[randomIndex]);
    }, []); // Empty dependency array ensures the effect runs only once, on initial render

    return (
        <div className="background-container" style={{ backgroundImage: `url(${randomImage})` }}>
            {/* You can add additional content here */}
        </div>
    );
}

export default Background;


