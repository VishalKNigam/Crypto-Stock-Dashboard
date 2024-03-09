import axios from "axios";
import {
  GET_COINS_LOADING,
  GET_COINS_ERROR,
  GET_COINS_SUCCESS,
} from "./actionTypes";

export const getCoins = (params, toast) => async (dispatch) => {
  dispatch({ type: GET_COINS_LOADING });
  try {
    let res = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR`
    , { params });
    // console.log(res);
    dispatch({ type: GET_COINS_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: GET_COINS_ERROR });
    console.log(err);
    toast({
      title: "Failed To Fetch Coins",
      description: "Rate Limit Exceeded",
      status: "error",
      duration: 4000,
      isClosable: true,
    });
  }
};
