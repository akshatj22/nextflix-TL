import axios from 'axios';
export default axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params:{
        api_key:'b0b54790a7642a91e7857c4e183fc136'
    }
})