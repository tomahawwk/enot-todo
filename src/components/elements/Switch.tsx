import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

export default styled(Switch)(() => ({
    width: 50,
    height: 29,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        margin: 2,
        padding: 0,
        transform: 'translateX(0px)',
        '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(21px)',
        '& .MuiSwitch-thumb:before': {
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#A9A9A9',
            )}" d="M14.3938 1.1937L6.47953 11.0892L0.262512 5.90778L1.43553 4.50016L6.2156 8.48293L12.9641 0.0500031L14.3938 1.1937Z"/></svg>')`,
        },
        '& + .MuiSwitch-track': {
            opacity: 1,
            backgroundColor: '#10C200',
        },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: '#F4F4F4',
        width: 25,
        height: 25,
        '&:before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 2,
        top: 3,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#A9A9A9',
        )}" d="M11.8976 13.2468L6.61086 7.95169L1.32411 13.2468L0.143738 12.0664L5.4388 6.77962L0.143738 1.49287L1.32411 0.3125L6.61086 5.60756L11.8976 0.320813L13.0697 1.49287L7.78293 6.77962L13.0697 12.0664L11.8976 13.2468Z"/></svg>')`,
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#366EFF',
        borderRadius: 20,
    },
}));