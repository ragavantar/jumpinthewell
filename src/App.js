import React, { Component } from 'react';
import './App.css';

import { Engine, Render, World, Bodies, Body } from 'matter-js';

class App extends Component {
  state = {  }

  componentDidMount() {
  
  const engine = Engine.create();

  const render = Render.create({
    element: document.getElementById('game'),
    engine: engine,
    options: {
      width: window.innerWidth,
      height: window.innerHeight - 100,
      wireframes: false
    }
  });
  
  const box = Bodies.rectangle(
    260, 120, 40, 40, 
    { isStatic: true, 
      render: {fillStyle: 'yellow'} 
    });

  World.add(engine.world, box);


  Engine.run(engine);

  Render.run(render);
}
  
  render() { 
    return ( 
      <React.Fragment>

      <div id="game">

      </div>
      <button> horizontal wall</button>
      <button> angled wall</button>
      </React.Fragment>
     );
  }
}
 
export default App;
