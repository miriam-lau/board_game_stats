import React, { Component } from "react";

class GameStats extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <section>
          <article>Image</article>
          <article>Game Name</article>
        </section>

        <section>
          Stats
          <article>Win Percentage or Average Winning Score</article>
          <article>If have win score, Average Losing Score</article>
          <article>Win Rate for Character</article>
          <article>Games played for Character</article>
        </section>
      </div>
    );
  }
}

export default GameStats;
