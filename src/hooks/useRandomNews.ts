
import { useState } from 'react';
import { useQuery } from 'react-query';
import { NewsService } from '../services/news.service';

export const useRandomNews = () => {
  const [randomArticle, setRandomArticle] = useState<string>("");
  const { isLoading } = useQuery(
    'news',
    () => NewsService.getNews(), {
    onSuccess: (data:any) => {
      const news = data.data.response.results;
      setRandomArticle(news[Math.floor(Math.random() * news.length)].webTitle)
    },
  })

  return { isLoading, randomArticle }
}