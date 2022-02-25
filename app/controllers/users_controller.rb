class UsersController < ApplicationController
  before_action :set_user, only: %i[ show update destroy ]
  before_action :authorize_request, except: [:create, :index]
  protect_from_forgery with: :null_session


  # GET /users
  def index
    @users = User.all
    render json: @users.each{|user| user.attributes.except("password_digest")}
  end

  # GET /users/1
  def show
    render json: @user.attributes.except("password")
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
      render json: @user.attributes.except("password_digest")
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
    render json: @user
  end


  private
  # Use callbacks to share common setup or constraints between actions.
  def set_user
    @user = User.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def user_params
    params.require(:user).permit(:email, :username, :password)
  end


end
