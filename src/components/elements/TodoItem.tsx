import { FC, useEffect, useState } from 'react';
import styled, {css} from 'styled-components'
import FormControlLabel from '@mui/material/FormControlLabel';

import { Switch } from './';
import { ITask } from 'services/todo.service';

const StyledTodoItemLabel = styled(FormControlLabel)`
  margin-left: 0!important;
  gap: 20px;
  width: 100%;
  justify-content: space-between;
  .MuiFormControlLabel-label {
    white-space: nowrap;
    max-width: calc(100% - 70px);
  }
`

const StyledTodoItemContent = styled.div<ITask>`
  display: flex;
  flex-direction: column;
  gap: 5px;
  line-height: initial;
  white-space: nowrap;
  
  b {
    font-size: 22px;
    font-weight: 500;
    ${props => props.checked && css`
      text-decoration: line-through;
    `}
  }
  p {
    color: rgba(255,255,255,.6);
    font-size: 14px;
  }
  b, p {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

const TodoItemContent:FC<ITask> = ({ title, description, checked }) => {
  return (
    <StyledTodoItemContent checked={checked}>
      { title && <b>{ title }</b> }
      { description && <p>{ description }</p> }
    </StyledTodoItemContent>
  )
}

const TodoItem:FC<ITask> = ({ title, description, performed, checked, onChange, index }) => {
  const [switchChecked, setSwitchChecked] = useState<boolean>(false);

  useEffect(() => {
    setSwitchChecked(checked);
  }, [checked])

  const handleChange = (e) => {
    setSwitchChecked(e.target.checked);
    checked = switchChecked;
    if(onChange)
      onChange(e.target.checked, index)
  }

  return (
    <>
      { performed ? 
        <StyledTodoItemLabel
          control={<Switch />}
          checked={checked}
          labelPlacement="start"
          onChange={handleChange}
          label={
            <TodoItemContent title={title} description={description} checked={switchChecked} />
          }
        />
        :
        <TodoItemContent title={title} description={description} checked={switchChecked} />
      }
    </>
  )
}

export default TodoItem;