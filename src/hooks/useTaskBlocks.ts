
import { useQuery } from 'react-query';
import { ITaskBlock, TodoService } from '../services/todo.service';

export const useTaskBlocks = () => {
  const { isLoading, data:taskBlocks } = useQuery(
    'tasks blocks',
    () => TodoService.getAll(), {
    onError: (error:any) => {
      alert(error.message)
    },
    select: ({data}):ITaskBlock[] => data.map(taskBlock => ({
      ...taskBlock
    }))
  })

  return {isLoading, taskBlocks}
}