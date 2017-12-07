class GamesController < ApplicationController
  def index
    @games = Game.all
    render :json => @games
  end

  def create
    game_params = params[:game]

    game = Game.new
    game.name = game_params[:name]
    game.play_time = game_params[:play_time]
    game.image_name = game_params[:image_name]
    game.category = game_params[:category]
    game.expansions = game_params[:expansions]
    game.co_op = game_params[:co_op]
    game.own = game_params[:own]
    game.mobile = game_params[:mobile]

    game.save!
  end
end
