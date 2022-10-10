import axios from 'axios';

export const NewsService = {
    async getNews() {
        return axios.get('https://newsapi.org/v2/everything?q=Cosmos&from=2022-10-09&sortBy=popularity&apiKey=8a2070cd9b824bd8a2631d1bcaa55dc7')
    }
}