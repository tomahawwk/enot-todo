
import { Switch } from 'components/elements';
import AppContext from 'context';
import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import FormControlLabel from '@mui/material/FormControlLabel';

const StyledSettings = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 20px;
    margin: auto;
    z-index: 2;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    @media (max-width: ${props => props.theme.screen.tablet}){
        bottom: initial;
        top: 10vh;
    }
`

const StyledSettingsOverlay = styled.div`
    background: rgba(0,0,0,.4);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    left: 0;
    transition-duration: .6s;
`

const StyledSettingsContent = styled.div`
    width: 300px;
    z-index: 1;
    border-radius: 20px;
    transform: translateX(calc(100% + 20px));
    position: relative;
    padding: 30px;
    background: ${props => props.theme.colors.grey};
    height: 80vh;
    transition-duration: ${props => props.theme.transition.duration};
    transition-timing-function: ${props => props.theme.transition.timing};
    box-shadow: -2px 0px 10px rgba(0,0,0,.2);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: ${props => props.theme.screen.tablet}){
        width: 100%;
        padding: 20px;
        height: auto;
    }
`

const StyledSettingsSwitch = styled(FormControlLabel)`
    width: 100%;
    justify-content: space-between;
    gap: 20px;
    margin: 0!important;
    font-size: 18px;
`

const Settings = () => {
    const [showNewsChecked, setShowNewsChecked] = useState<boolean>(false);
    const context = useContext(AppContext);
    
    useEffect(() => {
        if(context)
            setShowNewsChecked(context.showNews)
    }, [showNewsChecked])

    const closeSettings = () => {
        if(context)
            context.setSettingsOpen(false)
    }

    const toggleNewsBlock = () => {
        if(context){
            setShowNewsChecked(!context.showNews)
            context.setShowNews(!context.showNews)
            
            setTimeout(() => {
                closeSettings();
            }, 300)
        }
    }

    return (
        <StyledSettings>
            <StyledSettingsOverlay className="overlay" onClick={closeSettings} />
            <StyledSettingsContent className="content">
                <StyledSettingsSwitch
                    control={<Switch />}
                    checked={showNewsChecked}
                    labelPlacement="start"
                    onChange={toggleNewsBlock}
                    label={
                        <p>Show news</p>
                    }
                />
            </StyledSettingsContent>
        </StyledSettings>
    )
}

export default Settings;