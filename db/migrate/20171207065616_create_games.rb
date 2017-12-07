class CreateGames < ActiveRecord::Migration[5.1]
  def change
    create_table :games do |t|
      t.string :name, null: false
      t.string :play_time
      t.string :image_name
      t.string :category
      t.text :expansions
      t.boolean :co_op
      t.boolean :own
      t.boolean :mobile
      t.timestamps
    end
  end
end
