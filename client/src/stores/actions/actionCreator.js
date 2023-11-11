import { JOB_FETCH_SUCCESS, JOB_DETAIL_FETCH_SUCCESS } from "./actionTypes"

export const fetchJobSuccess = (payload) => {
    return {type: JOB_FETCH_SUCCESS, payload}
}

export const fetchJobDetailSuccess = (payload) => {
    return {type: JOB_DETAIL_FETCH_SUCCESS, payload}
}

const BASE_URL = 'https://api4.reynalviyurandhika.xyz/pub/'

export const fetchJob = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(BASE_URL + 'jobs')
            const resData = await response.json()
            if (!response.ok) {
                throw resData
            }
            console.log(resData)
            dispatch(fetchJobSuccess(resData))
        } catch (error) {
            console.log(error)
        }
    }
}

export const fetchDetailJob = (id) => {
    return async (dispatch) => {
        try {
            console.log(id)
            const response = await fetch(BASE_URL + `jobs/${id}`)
            const resData = await response.json()
            if (!response.ok) {
                throw resData
            }
            console.log(resData)
            dispatch(fetchJobDetailSuccess(resData))
        } catch (error) {
            console.log(error)
        }
    }
}