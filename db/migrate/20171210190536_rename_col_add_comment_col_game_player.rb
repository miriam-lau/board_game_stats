class RenameColAddCommentColGamePlayer < ActiveRecord::Migration[5.1]
  def change
    rename_column :game_players, :games_id, :game_id
    rename_column :game_players, :players_id, :player_id
    add_column :game_players, :comments, :text
  end
end
