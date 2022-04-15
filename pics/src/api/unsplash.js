import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID NgyhbbrU2mrtzwsfDV1EqlWnIwznFcAA916lK3fnGaY'
    },
})