import TextField from '@mui/material/TextField';
import styled from 'styled-components'

export default styled(TextField)`
    width: 100%;
    label, input, label.Mui-focused{
        color: white; 
    }
    .MuiInputBase-root{
        &:before{
            border-bottom: 1px solid rgba(255,255,255,.1);
        }
        &:hover {
            &:before{
                border-bottom: 2px solid rgba(255,255,255,.1)!important;
            }
        }
    }
`