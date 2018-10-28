import axios from 'axios'
const http = ({url, method='GET', data=null}) => {
  return axios({
    url,
    method,
    data
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