require "csv"
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "--------------------- Seeding Players ---------------------"
csv_text = File.read(Rails.root.join('lib', 'seeds', 'Board Game Database - Players.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
  p = Player.new
  p.name = row['Name']
  p.image_name = row['Image Name']
  p.save!

  puts "#{p.id}, #{p.name}, #{p.image_name}"
end

puts "--------------------- Seed Game Ratings ---------------------"
def create_game_rating(game_id, player_id, rating, comment)
  gp = GamePlayer.new
  gp.game_id = game_id
  gp.player_id = player_id
  gp.game_rating = rating
  gp.game_comment = comment
end

puts "--------------------- Seeding Games ---------------------"
csv_text = File.read(Rails.root.join('lib', 'seeds', 'Board Game Database - Games.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
  g = Game.new
  g.name = row['Name']
  g.play_time = row['Play Time']
  g.image_name = row['Image Name']
  g.category = row['Category']
  g.expansions = row['Expansions']
  g.co_op = row['Co-op']
  g.own = row['Own']
  g.mobile = row['Mobile']
  g.save!

  Players.each do
    if (Player.name == 'James')
      player_id = Player.id
      rating = row['James Rating']
      comment = row['James Comments']
    end

    if (Player.name == 'Miriam')
      player_id = Player.id
      rating = row['Miriam Rating']
      comment = row['Miriam Comments']
    end

    puts "#{Player.name}, #{player_id}, #{rating}, #{comment}"

    create_game_rating(g.id, player_id, rating, comment)
  end



  puts "#{g.name}, #{g.play_time}, #{g.image_name}, #{g.category},"
      + " #{g.expansions}, #{g.co_op}, #{g.own}, #{g.mobile}"
end
