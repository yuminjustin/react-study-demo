import '@babel/polyfill'
/* react*/
import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}


render(<App />,
document.getElementById('app'));


/* webpack hot reload*/
if (module.hot) {
    module.hot.accept();
}
