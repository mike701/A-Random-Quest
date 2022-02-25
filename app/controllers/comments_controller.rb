class CommentsController < ApplicationController
  before_action :set_comment, only: %i[ show update destroy ]
  before_action :authorize_request, only: [:create, :update, :destroy]

  # GET /comments
  def index
    @post = Post.find(params[:post_id])
    @comments = @post.comments

    render json: @comments, include: :user
  end

  def get_all_comments
    @comments = Comment.all
    render json: @comments
  end

  # GET /comments/1
  def show
    render json: @comment, include: :user
  end

    # Get /users/:user_id/comments
    def get_user_comments
      @comments = Comment.all,include: :user
      @user = User.find(params[:user_id])
      @user_comments=[]
      @comment.each do |comment|
        if(comment.user_id==:user_id)
          @user_comments.push(comment)
        end
      end

      render json: @user_comments
    end

  # POST /comments
  def create
    @comment = Comment.new(comment_params)
    @comment.user = @current_user
    @comment.post_id = params[:post_id]

    if @comment.save
      render json: @comment, status: :created
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /comments/1
  def update
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /rcomments/1
  def destroy
    @comment.destroy
    render json: @comment
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = Comment.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def comment_params
      params.require(:comment).permit(:upvote,:content, :user_id)
    end
end
