import React from 'react';

const App = () => {
  return (
    <>
      Welcome to the World of Professional React!
    
    <br/>
      Environment : {process.env.NODE_ENV}

    <br/>
      Secret: {process.env.REACT_APP_SECRET_KEY}
    </>
  );
};

export default App;