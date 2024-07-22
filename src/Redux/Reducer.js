import {
  MOVIE_SEARCHED_FAIL,
  MOVIE_SEARCHED_REQUEST,
  MOVIE_SEARCHED_SUCCESS,
  CLEAR_ERRORS,
  MOVIE_INFO_FAIL,
  MOVIE_INFO_REQUEST,
  MOVIE_INFO_SUCCESS,
} from "./constants";

export const moviesReducer = (state = { movies: [] }, action) => {
  switch (action.type) {
    case MOVIE_SEARCHED_REQUEST: {
      return {
        loading: true,
        movies: [],
      };
    }

    case MOVIE_SEARCHED_SUCCESS: {
      return {
        loading: false,
        movies: action.payload,
      };
    }

    case MOVIE_SEARCHED_FAIL: {
      return {
        loading: false,
        movies: action.payload,
      };
    }

    case CLEAR_ERRORS: {
      return {
        ...state,
        error: null,
      };
    }

    default:
      return state;
  }
};

export const movieInfoReducer = (state = { movieInfo: [] }, action) => {
  switch (action.type) {
    case MOVIE_INFO_REQUEST: {
      return {
        loading: true,
        movie: [],
      };
    }

    case MOVIE_INFO_SUCCESS: {
      return {
        loading: false,
        movie: action.payload,
      };
    }

    case MOVIE_INFO_FAIL: {
      return {
        loading: false,
        movie: action.payload,
      };
    }

    case CLEAR_ERRORS: {
      return {
        ...state,
        error: null,
      };
    }

    default:
      return state;
  }
};
