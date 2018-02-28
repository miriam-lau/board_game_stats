class RenameCommentColGamePlayer < ActiveRecord::Migration[5.1]
  def change
    rename_column :game_players, :comments, :game_comment
  end
end
