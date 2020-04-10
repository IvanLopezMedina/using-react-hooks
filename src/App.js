import React from 'react';
import Home from './Home';
import Speakers from './Speakers';

const pageToShow = pageName => {
  if (pageName === 'Home') return <Home />;
  if (pageName === 'Speakers') return <Speakers />;
  return <div>Not Found</div>;
};

const contextValue = {
  showSpeakerSpeakingDays: true,
  showSignMeUp: false
};

export const ConfigContext = React.createContext();

const App = ({pageName}) => {
  return (
    <ConfigContext.Provider value={contextValue}>
      <div>{pageToShow(pageName)}</div>;
    </ConfigContext.Provider>
  );
};

export default App;
