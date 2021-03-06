import axios from 'axios';
import {
  FETCH_EPISODES,
  FILTER_EPISODES,
  SELECT_SEASON,
} from '../constants/action_types.js';

//Fetches all episodes - async
export const fetchEpisodes = () => dispatch => {
  dispatch({
    type: FETCH_EPISODES,
    status: 'pending',
  });

  axios
    .get('/api')
    .then(response =>
      dispatch({
        type: FETCH_EPISODES,
        status: 'success',
        response: response.data,
      })
    )
    .catch(err => {
      dispatch({
        type: FETCH_EPISODES,
        status: 'error',
        error: err,
      });
    });
};

//Filters episodes by title - filtering is done on front end
export const filterEpisodes = title => {
  return {
    type: FILTER_EPISODES,
    response: title,
  };
};

//Fetches episodes from selected season - filtering is done on back end - async
export const selectSeason = season => dispatch => {
  dispatch({
    type: SELECT_SEASON,
    status: 'pending',
  });

  axios
    .get('/api/' + season)
    .then(response =>
      dispatch({
        type: SELECT_SEASON,
        status: 'success',
        response: response.data,
      })
    )
    .catch(err => {
      dispatch({
        type: SELECT_SEASON,
        status: 'error',
        error: err,
      });
    });
};
