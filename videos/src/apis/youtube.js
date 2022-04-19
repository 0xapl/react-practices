import axios from 'axios'


const KEY = 'AIzaSyAnypz8ZlKsWknPYODUoJOZ8UOLghsoqXA'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    }
})