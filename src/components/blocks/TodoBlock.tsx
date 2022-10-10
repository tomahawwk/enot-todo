import { FC, useState } from 'react';
import { useMutation } from 'react-query';
import { ITask, ITaskBlock, TodoService } from 'services/todo.service';
import styled, {css} from 'styled-components';
import Button from '@mui/material/Button';

import { Input, Title, TodoItem } from '../elements';
import { Flex } from 'components/helpers';
type TodoBlockProps = {
    title: string;
    list: ITask[],
    id: number,
    performed?: boolean
}

interface StyledProps {
    openForm?: boolean;
    toggle?: boolean;
    open?: boolean;
}

const StyledTodoBlock = styled.div<StyledProps>`
    flex-direction: column;
    display: grid;
    grid-template-rows: 40px 1fr;
    gap: 20px;
    ${props => props.toggle && css`
        @media (max-width: ${props => props.theme.screen.tablet}){
            grid-template-rows: initial;
            padding: 20px;
            box-shadow: 0px 1px 10px rgba(0,0,0,.5); 
            background: ${props => props.theme.colors.greyDark};
        }
    `}
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 15px;
        overflow-y: auto;
        &::-webkit-scrollbar {
            width: 5px;
        }
        
        &::-webkit-scrollbar-thumb{
            border-radius: 4px;
            background: rgba(0,0,0,.3);
        }
    }
    li {
        position: relative;
        padding-left: 15px;
        &:before {
            content: '';
            border-radius: 4px;
            width: 3px;
            background: ${props => props.theme.colors.lightGrey};
            height: 80%;
            position: absolute;
            top: 10%;
            left: 0;
        }
        &:nth-of-type(3n + 1):before{
            background: red;
        }
        &:nth-of-type(3n + 2):before{
            background: blue;
        }
        &:nth-of-type(3n + 3):before{
            background: yellow;
        }
    }
`

const StyledTodoBlockInner = styled.div<StyledProps>`
    background: ${props => props.theme.colors.greyDark};
    border-radius: 10px;
    display: grid;
    grid-template-rows: 300px 50px;
    gap: 20px;
    padding: 20px;
    box-shadow: 0px 2px 10px rgba(0,0,0,.5);
    @media (max-width: ${props => props.theme.screen.tablet}){
        box-shadow: 0px 1px 10px rgba(0,0,0,.5);
    }
    ${props => props.openForm && css`
        grid-template-rows: 200px 150px;
    `}
    ${props => props.toggle && css`
        @media (max-width: ${props => props.theme.screen.tablet}){
            background: none;
            border-radius: initial;
            box-shadow: none;
            padding: 0px;
            display: none;
            ${props => props.open && css`
                display: grid;
            `}
        }
    `}
    & > button {
        align-self: end;
    }
    @media (max-width: ${props => props.theme.screen.tablet}){
        grid-template-rows: 250px 50px;
        ${props => props.openForm && css`
            grid-template-rows: 150px 150px;
        `}
    }
`

const StyledTodoBlockForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-end;
    button {
        font-size: 11px;
        padding: 5px 10px 3px;
    }
`

const TodoBlock:FC<TodoBlockProps> = ({ title, list, id, performed }) => {
    const {mutateAsync} = useMutation('update todo', (data: ITaskBlock) => TodoService.updateTodoBlock(data, id))
    const [openForm, setOpenForm] = useState<boolean>(false);
    const [formTitle, setFormTitle] = useState<string>("");
    const [formDescription, setFormDescription] = useState<string>("");
    const [open, setOpen] = useState<boolean>(false);

    const checkTodo = (checked, id) => {
        list[id].checked = checked;
        updateBlock();
    }

    const updateBlock = async () => {
        await mutateAsync({title: title, id: id, list: list})
    }

    const resetForm = () => {
        setOpenForm(false);
        setFormTitle("");
        setFormDescription("");
    }

    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const item = {
            title: formTitle,
            description: formDescription,
            checked: false
        }
        list.push(item)
        updateBlock();
        resetForm();
    }

    return (
        <StyledTodoBlock toggle={!performed} open={open}>
            <Title todoBlock={!performed} actualBlock={performed} open={open} onClick={() => setOpen(!open)}>{ title }</Title>
            <StyledTodoBlockInner openForm={openForm} toggle={!performed} open={open}>
                {
                    list.length ?
                    <ul>
                        {list.map((task, index) => (
                            <li>
                                <TodoItem key={index} index={index} {...task} performed={performed} onChange={checkTodo} />
                            </li>
                        ))}
                    </ul>
                    :
                    <p>Add some task :)</p>
                }
                
                {openForm ?
                    <StyledTodoBlockForm onSubmit={onSubmit}>
                        <Input
                            label="Title"
                            value={formTitle}
                            onChange={(e) => setFormTitle(e.target.value)}
                            variant="standard"
                            required={true}
                            />
                        <Input
                            label="Description"
                            value={formDescription}
                            onChange={(e) => setFormDescription(e.target.value)}
                            variant="standard"
                            />
                        <Flex gap="10px">
                            <Button variant="outlined" onClick={resetForm}>Cancel</Button>
                            <Button variant="contained" type="submit">Add task</Button>
                        </Flex>
                    </StyledTodoBlockForm>
                    :
                    <Button onClick={() => setOpenForm(!openForm)} variant="contained">Add task</Button>
                }
                
            </StyledTodoBlockInner>
        </StyledTodoBlock>
    )
}

export default TodoBlock;