import { 
    JOB_FETCH_SUCCESS, 
    COMPANY_FETCH_SUCCESS,
    ADD_JOB_SUCCESS,
    JOB_EDIT_FETCH_SUCCESS,
    COMPANY_EDIT_FETCH_SUCCESS
} from "./actionTypes"

import Swal from 'sweetalert2'

export const fetchJobSuccess = (payload) => {
    return {type: JOB_FETCH_SUCCESS, payload}
}

export const fetchCompanySuccess = (payload) => {
    return {type: COMPANY_FETCH_SUCCESS, payload}
}

export const addJobSuccess = (payload) => {
    return {type: ADD_JOB_SUCCESS, payload}
}

export const fetchEditJobSuccess = (payload) => {
    return {type: JOB_EDIT_FETCH_SUCCESS, payload}
}

export const fetchEditCompanySuccess = (payload) => {
    return {type: COMPANY_EDIT_FETCH_SUCCESS, payload}
}

const BASE_URL = 'https://api4.reynalviyurandhika.xyz/'

export const fetchJob = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(BASE_URL + 'admin/' + 'jobs', {
              method: 'get',
              headers: {
                access_token: localStorage.access_token
              }
            })
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

export const fetchCompany = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(BASE_URL + 'admin/' + 'company', {
              method: 'get',
              headers: {
                access_token: localStorage.access_token
              }
            })
            const resData = await response.json()
            if (!response.ok) {
                throw resData
            }
            console.log(resData)
            dispatch(fetchCompanySuccess(resData))
        } catch (error) {
            console.log(error)
        }
    }
}

export const addJob = (payload) => {
    return async (dispatch) => {
        try {
            console.log(payload, "<<<<")
            const response = await fetch(BASE_URL + 'admin/' + 'Jobs', {
              method: 'post',
              headers: {
                'Content-Type': 'application/json',
                access_token: localStorage.access_token
              },
              body: JSON.stringify(payload)
            })

            const resData = await response.json()      

            if (!response.ok) {
              throw resData;
            }

            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Add Job Success',
              showConfirmButton: false,
              timer: 1500
            })
            return resData
          } catch (error) {
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: error.message,
              showConfirmButton: false,
              timer: 1500
            })
            console.log(error)
          }
    }
}

export const deleteJob = (id) => {
    return async (dispatch) => {
        try {
            await fetch(BASE_URL + 'admin/' + `jobs/${id}`, 
                      {
                        method: 'delete',
                        headers: {
                          access_token: localStorage.access_token
                        }
                      })

            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Delete Job Success',
              showConfirmButton: false,
              timer: 1500
            })
            dispatch(fetchJob())
        } catch (error) {
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: error.message,
              showConfirmButton: false,
              timer: 1500
            })
            console.log(error)
        }
    }
}

export const fetchEditData = (id) => {
    return async (dispatch) => {
        try {
            const response = await fetch(BASE_URL + 'admin/' + 'Jobs/' + id, {
              method: 'get',
              headers: {
                access_token: localStorage.access_token,
                'Content-Type': 'application/json'
              }
            })
            const resData = await response.json()
            if (!response.ok) {
                throw resData
            }
            return resData
          } catch (error) {
            console.log(error)
          }
    }
}

export const postEditData = (payload, id) => {
    return async () => {
        try {
            event.preventDefault()
            const response = await fetch(BASE_URL + 'admin/' + 'Jobs/' + id, {
              method: 'put',
              headers: {
                'Content-Type': 'application/json',
                access_token: localStorage.access_token
              },
              body: JSON.stringify(payload)
            })
    
            const resData = await response.json()

            if (!response.ok) {
              throw resData;
            }

            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Edit Job Success',
              showConfirmButton: false,
              timer: 1500
            })

            return resData

          } catch (error) {
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: error.message,
              showConfirmButton: false,
              timer: 1500
            })
            console.log(error)
          }
    }
}

export const addCompany = (payload) => {
    return async () => {
        try {
            console.log(payload, "<<<<")
            const response = await fetch(BASE_URL + 'admin/' + 'company', {
              method: 'post',
              headers: {
                'Content-Type': 'application/json',
                access_token: localStorage.access_token
              },
              body: JSON.stringify(payload)
            })

            const resData = await response.json()      

            if (!response.ok) {
              throw resData;
            }

            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Add Company Success',
              showConfirmButton: false,
              timer: 1500
            })

            return resData
          } catch (error) {
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: error.message,
              showConfirmButton: false,
              timer: 1500
            })
            console.log(error)
          }
    }
}

export const deleteCompany = (id) => {
    return async (dispatch) => {
        try {
            await fetch(BASE_URL + 'admin/' + `company/${id}`, 
                        {
                          method: 'delete',
                          headers: {
                            access_token: localStorage.access_token
                          }
                        })
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Delete Company Success',
              showConfirmButton: false,
              timer: 1500
            })
            dispatch(fetchCompany())
        } catch (error) {
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: error.message,
              showConfirmButton: false,
              timer: 1500
            })
            console.log(error)
        }
    }
}

export const fetchCompanyEditData = (id) => {
    return async () => {
        try {
            const response = await fetch(BASE_URL + 'admin/' + 'company/' + id, {
              method: 'get',
              headers: {
                access_token: localStorage.access_token
              }
            })
            const resData = await response.json()
            if (!response.ok) {
                throw resData
            }
          
            return resData
          } catch (error) {
            console.log(error)
          }
    }
}

export const postEditCompany = (payload, id) => {
    return async () => {
        try {
          console.log(payload)
            const response = await fetch(BASE_URL + 'admin/' + 'company/' + id, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                access_token: localStorage.access_token,
              },
              body: JSON.stringify(payload)
            })

            const resData = await response.json()
            console.log(resData)
      
            if (!response.ok) {
              throw resData;
            }

            console.log(resData)

            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Edit Company Success',
              showConfirmButton: false,
              timer: 1500
            })

            return resData
      
          } catch (error) {
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: error.message,
              showConfirmButton: false,
              timer: 1500
            })
            console.log(error)
          }
    }
}

export const postNewAdmin = (data) => {
    return async () => {
        try {
            const response = await fetch(BASE_URL + 'register', {
              method: 'post',
              headers: {
                'Content-Type': 'application/json',
                access_token: localStorage.access_token
              },
              body: JSON.stringify(data)
            })

            const resData = await response.json()
      
            if (!response.ok) {
              throw resData
            }

            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Register New Admin Success',
              showConfirmButton: false,
              timer: 1500
            })
      
            return resData

          } catch (error) {
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: error.message,
              showConfirmButton: false,
              timer: 1500
            })
            console.log(error)
          }
    }
}


export const handleLogin = (data) => {
  return async () => {
    try {
      const response = await fetch(BASE_URL + 'login', {
          method: 'post',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
      })
      const resData = await response.json()
      if (!response.ok) {
          throw resData
      }

      localStorage.setItem('access_token', resData.access_token)

      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Login Success',
        showConfirmButton: false,
        timer: 1500
      })
     
  } catch (error) {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: error.message,
      showConfirmButton: false,
      timer: 1500
    })
    console.log(error)
  }
  }
  
  
}