import axios from "axios";

const authApi = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params:{
        key: 'AIzaSyCRX_imIGkJTP2AbcT_zXA050iKZhERDjM'
    }
})

export default authApi;