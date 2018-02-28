// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.
import React, { Component } from "react";
import ReactDOM from "react-dom";

import GameLogs from "../components/game_logs";
import GameRatings from "../components/game_ratings";
import GameStats from "../components/game_stats";
import PlayerStats from "../components/player_stats";

const GAMES_URL = "/games";
const PAGES = {
  RATINGS: 1,
  STATS: 2,
  LOGS: 3,
  PLAYER_STATS: 4
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { showPage: PAGES.RATINGS, games: [] }
    this.fetchGames();
  }

  fetchGames() {
    fetch(GAMES_URL).then(response => {
      return response.json();
    }).then(data => {
      console.log("DATA", data);
      this.setState({ games: data });
    });
  }

  navigatetoPage(page) {
    this.setState({ showPage: page });
  }

  renderPage() {
    switch (this.state.showPage) {
      case PAGES.RATINGS:
        return <GameRatings games={ this.state.games } />
      case PAGES.STATS:
        return <GameStats />
      case PAGES.LOGS:
        return <GameLogs />
      case PAGES.PLAYER_STATS:
        return <PlayerStats />
    }
  }

  render() {
    return (
      <div>
        <header>
          <article className="logo">LOGO</article>
          <section className="nav-bar">
            <input value="Search" />
            <button onClick={ () => this.navigatetoPage(PAGES.RATINGS) }>
              Home
            </button>
            <button onClick={ () => this.navigatetoPage(PAGES.LOGS) }>
              Play Logs
            </button>
            <button onClick={ () => this.navigatetoPage(PAGES.STATS) }>
              Game Stats
            </button>
            <button onClick={ () => this.navigatetoPage(PAGES.PLAYER_STATS) }>
              Player Stats
            </button>
          </section>
        </header>

        <main>
          { this.renderPage() }
        </main>

        <footer>
          Footer
        </footer>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />,
    document.body.appendChild(document.createElement('div')),
  )
})
