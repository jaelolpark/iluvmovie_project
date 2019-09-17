class FavoritesController < ApplicationController
  skip_before_action :authorized, only: [ :index, :create ]

  def index
    @favorites = Favorite.all
    render json: @favorites
  end

  def create
    @favorite = Favorite.new(user_id: favorite_params['user_id'], movie_id: favorite_params['movie_id'])
    if @favorite.save
      render json: @favorite, status: :created
    else
      render json: @favorite.errors.full_messages, status: :not_acceptable
		end
  end

  def destroy
    currentUser = User.find(favorite_params[:user_id])
    @favorite = currentUser.favorites.find_by(movie_id: favorite_params[:movie_id])
      if @favorite.destroy
        render json: @favorite, status: :created
      else
        render json: @favorite.errors.full_messages, status: :unprocessable_entity
      end
  end

  private

  def favorite_params
    params.permit(:user_id, :movie_id)
  end
end
