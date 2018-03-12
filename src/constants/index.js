import wretch from "wretch";

export const movieAPI = wretch().url("https://api.themoviedb.org/3");

export const MOVIE_API_KEY = "api_key=99258f74a92e6a93157054d0c23d62f7";
export const MOVIE_API_LANG = "language=en-US";
export const MOVIE_API_ADULT = "include_adult=false";

// FETCH MOVIE

export const MOVIE_SUCCESS = "MOVIE_SUCCESS";
export const MOVIE_LOADING = "MOVIE_LOADING";
export const MOVIE_ERROR = "MOVIE_ERROR";

// SEARCH MOVIES

export const DISCOVER_SUCCESS = "DISCOVER_SUCCESS";
export const DISCOVER_LOADING = "DISCOVER_LOADING";
export const DISCOVER_ERROR = "DISCOVER_ERROR";

// SEARCH MOVIES

export const NEW_MOVIES_SUCCESS = "NEW_MOVIES_SUCCESS";
export const NEW_MOVIES_LOADING = "NEW_MOVIES_LOADING";
export const NEW_MOVIES_ERROR = "NEW_MOVIES_ERROR";

// SEARCH MOVIES BY GENRE

export const BY_GENRE_SUCCESS = "BY_GENRE_SUCCESS";
export const BY_GENRE_LOADING = "BY_GENRE_LOADING";
export const BY_GENRE_ERROR = "BY_GENRE_ERROR";

// WATCHED LIST

export const ADD_WATCHED = "ADD_WATCHED";
export const REMOVE_WATCHED = "REMOVE_WATCHED";

// WATCH LATER LIST

export const ADD_WATCH_LATER = "ADD_WATCH_LATER";
export const REMOVE_WATCH_LATER = "REMOVE_WATCH_LATER";
