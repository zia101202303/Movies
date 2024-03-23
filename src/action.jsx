// Action type constants (recommended to define constants for action types)
export const SET_IMAGES_UPCOMING = 'SET_IMAGES_upcoming';
export const SET_IMAGES_LATEST = 'SET_IMAGES_latest'; // Define a new action type constant
export const image_title = 'image_title';
export const image_filter = 'image_filter';
// Action creators

export const  Id_Movie='Id_Movie';
export const setUpcoming = (imageUpcoming) => ({
    type: SET_IMAGES_UPCOMING, // Use the constant for action type
    payload: imageUpcoming
});

export const setLatestImages = (imageLatest) => ({
    type: SET_IMAGES_LATEST, // Use the constant for action type
    payload: imageLatest
});


export const settitle = (imagetitle) => ({
    type: image_title, // Use the constant for action type
    payload: imagetitle
});


export const setfilter  = (imagefilter) => ({
    type: image_filter, // Use the constant for action type
    payload: imagefilter
});


export const setidofmovie  = (idofmovie) => ({
    type: Id_Movie, // Use the constant for action type
    payload: idofmovie
});