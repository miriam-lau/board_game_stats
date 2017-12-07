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
    return (
      <div className="ratings-wrapper">
        <h1>Board Game Reviews</h1>
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

        <tbody className="ratings-game-wrapper">
          <tr>
            <th>Average Rating</th>
            <th>Image</th>
            <th>Title</th>
            <th>Estimated Play Time</th>
            <th>Own, Mobile?</th>
            <th>Rating and Comments</th>
          </tr>

          <tr>
            <td>Rating</td>
            <td>Image</td>
            <td>Name</td>
            <td>Play Time</td>
            <td>Own, Mobile</td>
            <td>
              <section className="player-ratings">
                <article>James</article>
                <button>Edit</button>
              </section>
              <section className="player-ratings">
                <article>Miriam</article>
                <button>Edit</button>
              </section>
            </td>
          </tr>
        </tbody>
      </div>
    );
  }
}

export default GameRatings;
