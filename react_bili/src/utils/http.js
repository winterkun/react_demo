import axios from 'axios'
export const get = ({ url }) => {
    return axios({
        method: "get",
        url
    }).then((res) => {
        return res.data
    }).catch((error) => {
        return error.message
    })
}