class PostsController < ApplicationController
  before_action :set_post, only: %i[ show update destroy ]
  before_action :authorize_request, only: [:create, :update, :destroy, :get_user_posts]

  # GET /posts
  def index
    @posts = Post.all

    render json: @posts
  end

  # Get /users/:user_id/posts
  def get_user_posts
    @user = User.find(params[:user_id])
    render json: @user.posts
  end

  # GET /posts/1
  def show
    render json: @post, include: :comments
  end

  # POST /posts
  def create
    @post = Post.new(post_params)
    @post.user = @current_user

    if @post.save
      render json: @post, status: :created, location: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /products/1
  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /products/1
  def destroy
    @post.destroy
    render json: @post
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def post_params
      params.require(:post).permit(:title, :content, :category, :user_id,:comment_id)
    end
end
