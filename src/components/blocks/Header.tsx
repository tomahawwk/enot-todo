import { useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import AppContext from 'context';

import { Rotate } from '../helpers/Animations';
import { Flex } from '../helpers';

import { Logo } from '../elements';
import { SettingsIcon } from 'components/elements/Icons';
import styled from 'styled-components';

const Header = () => {
    const context = useContext(AppContext);
    
    const StyledSettingsButton = styled(IconButton)`
        transform: translateY(20px);
        opacity: 0;
        transform: rotate(180deg);
        animation: ${Rotate} .6s ${props => props.theme.transition.function} forwards;
    `

    const toggleSettings = () => {
        if(context)
            context.setSettingsOpen(!context.settingsOpen)
    }
    
    return (
        <Flex justify="space-between" align="center" gap="20px" width="100%">
            <Logo />
            <StyledSettingsButton onClick={toggleSettings}>
                <SettingsIcon />
            </StyledSettingsButton>
        </Flex>
    )
}

export default Header;
