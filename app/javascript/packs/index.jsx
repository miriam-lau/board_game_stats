// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React, { Component } from "react";
import ReactDOM from "react-dom";

import GameRatings from "../components/game_ratings";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <button>Game History</button>
          <button>Game Stats</button>
          <input value="Search" />
        </header>

        <main>
          <GameRatings />
        </main>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />,
    document.body.appendChild(document.createElement('div')),
  )
})
