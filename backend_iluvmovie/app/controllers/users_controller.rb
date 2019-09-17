class UsersController < ApplicationController
  skip_before_action :authorized, only: [ :index, :create ]
  before_action :set_user, only: [ :show ]

  def index
    @users = User.all
    render json: @users
  end

  def show
    render json: @user
  end

  def create
		@user = User.new(new_user_params)
    if @user.valid?
      @user.save
			@token = encode_token({ user_id: @user.id })
      render json: { user: UserSerializer.new(@user), jwt: @token }, status: :created
		else
			render json: { error: 'failed to create user'}, status: :not_acceptable
		end
	end

  private
  def set_user
		@user = User.find(params[:id])
  end

  def new_user_params
		params.require(:user).permit(:username, :password)
	end
end