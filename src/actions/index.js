import axios from "axios";

export const FETCH_SMURF_START = "FETCH_SMURF_START";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_FAIL = "FETCH_SMURF_FAIL";
export const ADD_SMURF = "ADD_SMURF";
export const ERROR = "ERROR";

export const fetchSmurf = () => (dispatch) => {
  dispatch({ type: FETCH_SMURF_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
      dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data });
      dispatch(setError(""));
    })
    .catch((err) => {
      dispatch(setError(err.response.data.Error));
    });
};

export const addSmurf = (smurf) => (dispatch) => {
  console.log(smurf);
  if (!smurf.name || !smurf.nickname || !smurf.position) {
    dispatch({
      type: ERROR,
    });
  }

  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then((res) => {
      dispatch({ type: ADD_SMURF, payload: { ...smurf } });
      dispatch(setError(""));
    })
    .catch((err) => {
      dispatch(setError(err.response.data.Error));
    });
};

export const setError = (err) => {
  return { type: ERROR, payload: err };
};

//Task List: X
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.
