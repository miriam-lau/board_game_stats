class CreateGamePlayers < ActiveRecord::Migration[5.1]
  def change
    create_table :game_players do |t|
      t.references :games
      t.references :players
      t.integer :game_rating
      t.timestamps
    end
  end
end
