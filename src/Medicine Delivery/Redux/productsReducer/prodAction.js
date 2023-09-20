import axios from "axios"
import { GET_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQ } from "./prodActionTypes"



export const getProducts = (category) => (dispatch) => {
    dispatch({ type: PRODUCT_REQ })
    axios.get(`https://upset-dove-zipper.cyclic.app/${category}`)
        .then((res) => {
            // console.log('getProductRes', res);
            dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data })
        })
        .catch((err) => {
            console.log('error while getting products', err)
            dispatch({ type: PRODUCT_FAILURE })
        })
}



// export const getProducts = (category,sort) => (dispatch) => {
//     dispatch({ type: PRODUCT_REQ })
//     const options = {
//         params: {
//             _sort :sort
//         }
//     }
//     axios.get(`https://upset-dove-zipper.cyclic.app/${category}`,options)
//         .then((res) => {
//             // console.log('getProductRes', res);
//             dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data })
//         })
//         .catch((err) => {
//             console.log('error while getting products', err)
//             dispatch({ type: PRODUCT_FAILURE })
//         })
// }




