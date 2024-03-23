// reducers.js

import { SET_IMAGES_UPCOMING, SET_IMAGES_LATEST, image_title, image_filter,Id_Movie } from './action';

const initialState = {
    upcomingImages: [],
    latestImages: [],
    imagesTitle: [],
    imagesfilter: [],
    Id_Movie: 0, // Add state for latest images
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IMAGES_UPCOMING:
            return {
                ...state,
                upcomingImages: action.payload
            };
        case SET_IMAGES_LATEST:
            return {
                ...state,
                latestImages: action.payload
            };


        case image_title:
            return {
                ...state,
                imagesTitle: action.payload
            };

        case image_filter:
            return {
                ...state,
               image_filter: action.payload
            };

            case Id_Movie:
                return {
                    ...state,
                    Id_Movie: action.payload
                };
        default:
            return state;
    }
};

export default rootReducer;
