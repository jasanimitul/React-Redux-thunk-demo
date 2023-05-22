import axios from "axios";
import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
} from "../constants/userConstants";

export const userAction = () => async (dispatch) => {
  try {
    dispatch({ type: GET_USERS_REQUEST });
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    dispatch({ type: GET_USERS_SUCCESS, payload: data });
  } catch (e) {
    dispatch({
      type: GET_USERS_FAIL,
      payload:
        e.data && e.response.data.message ? e.response.data.message : e.message,
    });
  }
};
