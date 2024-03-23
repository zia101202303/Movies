
import express from 'express';


const app = express();
const PORT = 3000; 


const data = [
    { 
        title: 'Doremon',
        link: 'https://youtu.be/UTAvGzCK6ok',
        description: 'New Doremon movie 2024'
    },
    { 
        title: 'Party',
        link: 'https://youtu.be/Si5auXCYWDI',
        description: 'New Party movie 2024'
    },
    { 
        title: 'Animes',
        link: 'https://youtu.be/uI_E2YPPJgY',
        description: 'New Animes movie 2024'
    }
];

app.get('/api', (req, res) => {
    res.json(data);
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
