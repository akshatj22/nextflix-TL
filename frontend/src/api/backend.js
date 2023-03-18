import axios from "axios";

 
export default axios.create({
    baseURL: 'http://20.224.109.144/api/v1/',
    'Content-type': 'application/json',
    Accept: 'application/json',
    withCredentials: true,
    method: "*",
    // params:{
    //     api_key:'b0b54790a7642a91e7857c4e183fc136'
    // }
})