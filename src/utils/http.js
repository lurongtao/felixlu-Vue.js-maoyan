import axios from 'axios'
const http = ({url, method='GET', data=null, params=null}) => {
  // console.log(params)
  return axios({
    url,
    method,
    data,
    params
  })
    .then((result) => {
      return result
    })
    .catch((err) => {
      return err
    })
}

export {
  http
}