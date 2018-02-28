import React, { Component } from "react";

const ratingScale = [
  "10: Willing to play every day for dozens of consecutive plays. Will only play other games for variety.",
  "9: Want to play almost everyday.",
  "8: Will suggest often and will never turn down a game if suggested.",
  "7: Usually willing to play.",
  "6: Will play if in the right mood.",
  "5: Will play occassionally, but will choose others if have better options.",
  "4: Will never suggest but can be convinced.",
  "3: Probably will never play it again, but can be coerced to play.",
  "2: Would never play it again and can't be convinced.",
  "1: Would burn the game if I see it again."
]

class GameRatings extends Component {
  constructor(props) {
    super(props)

    this.state = { showRatingScale: false }
  }

  toggleRatingScale() {
    this.setState({ showRatingScale: !this.state.showRatingScale });
  }

  render() {
    console.log("GAMES", this.props.games);

    if (this.props.games.length === 0) {
      return (
        <div>Loading</div>
      );
    }

    return (
      <div className="ratings-wrapper">
        <section className="ratings-header">
          <article className="ratings-title">Board Game Reviews</article>
          <input value="Sort By" />
        </section>

        <section className="ratings-scale-wrapper">
          <button onClick={ () => this.toggleRatingScale() }>Rating Scale</button>

          {this.state.showRatingScale ?
            <section className="rating-scale">
              <article>Rating Scale</article>
              <ul>
                { ratingScale.map( (item, idx) => {
                  return (
                    <li key={ idx }>{ item }</li>
                  );
                })}
              </ul>
            </section> : ""
          }
        </section>

        <tbody className="ratings-game-wrapper">
          <tr className="ratings-column-header">
            <th>Game Id</th>
            <th>Image</th>
            <th>Title</th>
            <th>Estimated Play Time</th>
            <th>Own, Mobile?</th>
            <th>Included Expansions</th>
            <th>Rating and Comments</th>
          </tr>

          {this.props.games.map(game => {
            return (
              <tr className="ratings-row" key={ game.id }>
                <td>{ game.id }</td>
                <td>
                  <img className="ratings-game-image"
                      src={ `/images/${game.image_name}` } />
                </td>
                <td className="ratings-align-left">{ game.name }</td>
                <td>{ game.play_time }</td>
                <td>
                  <article>{ game.own ? "Yes" : "No" }</article>
                  <article>{ game.own && game.mobile ? "(Mobile)" : ""}</article>
                </td>
                <td className="ratings-align-left">{ game.expansions }</td>
                <td className="player-ratings-wrapper">
                  <section className="player-ratings">
                    <article>James</article>
                    <input value="Edit" />
                  </section>
                  <section className="player-ratings">
                    <article>Miriam</article>
                    <input value="Edit" />
                  </section>
                </td>
              </tr>
            );
          })}
        </tbody>
      </div>
    );
  }
}

export default GameRatings;
