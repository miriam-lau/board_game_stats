import React, { Component } from "react";

class GameLogs extends Component {
  render() {
    return (
      <tbody className="ratings-game-wrapper">
        <tr>
          <th>Number</th>
          <th>Date</th>
          <th>Title</th>
          <th>Play Time</th>
          <th>
            <article>Winner</article>
            <article>Winning Character?</article>
            <article>Winning Score?</article>
          </th>
          <th>
            <article>Loser</article>
            <article>Losing Character?</article>
            <article>Losing Score?</article>
          </th>
        </tr>
      </tbody>
    );
  }
}

export default GameLogs;
