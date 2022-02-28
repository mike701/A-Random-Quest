class UsersController < ApplicationController
 
  before_action :set_user, only: %i[ show update destroy friends addFriend]
  before_action :authorize_request, except: [:create, :index]
  protect_from_forgery with: :null_session


  # GET /users
  def index
    @users = User.all
    render json: @users, include: :posts 
  end

  # GET /users/1
  def show
    render json: @user.attributes.except("password"),  include: :posts
  end

  # POST /users
  def create
    @user = User.new(user_params)
    if @user.save 
      @token = encode({id: @user.id})
      render json: {
        user: @user.attributes.except("password_digest"),
        token: @token
        }, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user.attributes.except("password_digest"),  include: :posts
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @posts= Posts.where(user_id: @user.id)
    @posts.each do |post|
      post.destroy
    end
    @user.destroy
    render json: @user
  end

  #get friends from /users/user_id/friends
  def friends
    @user[:friend]="help"
   render json: @user[:friend]
  end

  def addFriend
    @friend=@user[:friend]+`#{user_params[:friend]}`
    if @user.update(@friend)
      render json: @user.except("password_digest", "email", "created_at", "updated_at")
    else
      render json: @user.errors, status: :unprocessable_entity
    end
   end
  private
  # Use callbacks to share common setup or constraints between actions.
  def set_user
    @user = User.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def user_params
    params.require(:user).permit(:email, :username, :password, :friend)
  end


end
