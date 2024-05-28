import axios from 'axios';

const apiKey = process.env.REACT_APP_YT_API_KEY;

if (!apiKey) {
    console.error('REACT_APP_YT_API_KEY không được thiết lập trong biến môi trường!');
}

const request = axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3/',
    params: {
        key: apiKey,
    },
});

export default request;
