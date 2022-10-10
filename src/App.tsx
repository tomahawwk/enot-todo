import styled from 'styled-components'
import { CSSTransition } from "react-transition-group";

import { Header, NewsTicker, TodoBlock } from './components/blocks';
import { useTaskBlocks } from 'hooks/useTaskBlocks';
import AppContext, { AppContextInterface } from './context';
import Settings from 'components/blocks/Settings';
import { useState } from 'react';
import { FadeYUp } from 'components/helpers/Animations';

const AppWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 16px;
  padding: 30px 30px;
  gap: 30px;
  border-radius: 15px;
  background: ${props => props.theme.colors.grey};
  position: relative;
  overflow: hidden;
  @media (max-width: ${props => props.theme.screen.tablet}){
    border-radius: 0px; 
    height: 100vh;
    overflow-y: auto;
    padding: 20px 20px 50px;
    gap: 25px;
  }
`

const AppContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media (max-width: ${props => props.theme.screen.tablet}){
    gap: 25px;
  }
`

const TaskBlocks = styled.ul`
  display: grid;
  list-style: none;
  grid-template-columns: repeat(5, 300px);
  gap: 40px;
  @media (max-width: ${props => props.theme.screen.tablet}){
    grid-template-columns: initial;
    gap: 25px;
  }
  & > li{
    animation: ${FadeYUp} .6s ${props => props.theme.transition.function} forwards;
    opacity: 0;
    transform: translateY(20px);
    &:nth-child(1){
      animation-delay: .1s;
    }
    &:nth-child(2){
      animation-delay: .2s;
    }
    &:nth-child(3){
      animation-delay: .3s;
    }
  }
`

const App = () => {
  const { isLoading, taskBlocks } = useTaskBlocks();
  const [settingsOpen, setSettingsOpen] = useState<boolean>(false);
  const [showNews, setShowNews] = useState<boolean>(true);
  
  const context: AppContextInterface = {
    settingsOpen: settingsOpen,
    setSettingsOpen: setSettingsOpen,
    showNews: showNews,
    setShowNews: setShowNews
  };

  return (
    <AppContext.Provider value={context}>
      <AppWrapper>
        <AppContent>
          <Header />
          <>
            {isLoading ? <div>Loading...</div> : taskBlocks?.length ?
              <TaskBlocks>
                {taskBlocks.map(taskBlock => (
                  <li>
                    <TodoBlock key={taskBlock.id} {...taskBlock} />
                  </li>
                ))}
              </TaskBlocks>
              :
              <div>Tasks not found</div>
            }
          </>
        </AppContent>
        <CSSTransition
          in={showNews}
          timeout={600}
          classNames="news"
          unmountOnExit>
          <NewsTicker />
      </CSSTransition>
        
      </AppWrapper>

      <CSSTransition
        in={settingsOpen}
        timeout={600}
        classNames="modal"
        unmountOnExit>
          <Settings />
      </CSSTransition>
    </AppContext.Provider>
  );
}

export default App;