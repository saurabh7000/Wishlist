import axios from "axios";
import {
  CLEAR_ERRORS,
  MOVIE_INFO_FAIL,
  MOVIE_INFO_REQUEST,
  MOVIE_INFO_SUCCESS,
  MOVIE_SEARCHED_FAIL,
  MOVIE_SEARCHED_REQUEST,
  MOVIE_SEARCHED_SUCCESS,
} from "./constants";

export const getMovies = (title) => async (dispatch) => {
  try {
    dispatch({ type: MOVIE_SEARCHED_REQUEST });

    const { data } = await axios.get(
      `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&t=${title}`
    );

    dispatch({
      type: MOVIE_SEARCHED_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MOVIE_SEARCHED_FAIL,
      payload: error,
    });
  }
};

export const getMovieInfo = (id) => async (dispatch) => {
  try {
    dispatch({
      type: MOVIE_INFO_REQUEST,
    });

    const { data } = await axios.get(
      `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${id}&plot=full`
    );

    dispatch({
      type: MOVIE_INFO_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: MOVIE_INFO_FAIL,
      payload: error,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
