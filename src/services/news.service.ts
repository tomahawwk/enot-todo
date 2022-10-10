import axios from 'axios';

export const NewsService = {
    async getNews() {
        return axios.get('https://content.guardianapis.com/search?api-key=ebe44cce-d210-477a-aae5-6b9d4c3443de')
    }
}