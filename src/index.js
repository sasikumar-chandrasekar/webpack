import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const greating = 'Hello World!';

  return (
    <div>
      {greating}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
