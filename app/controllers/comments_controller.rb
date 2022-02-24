class CommentsController < ApplicationController
  before_action :set_review, only: %i[ show update destroy ]
  before_action :authorize_request, only: [:create, :update, :destroy]

  # GET /reviews
  def index
    @postt = Post.find(params[:product_id])
    @comments = @post.reviews

    render json: @comments, include: :user
  end

  def get_all_reviews
    @comments = Comment.all
    render json: @comments
  end

  # GET /reviews/1
  def show
    render json: @comment
  end

  # POST /reviews
  def create
    @comment = Comment.new(review_params)
    @comment.user = @current_user
    @comment.product_id = params[:product_id]

    if @comment.save
      render json: @comment, status: :created
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /reviews/1
  def update
    if @comment.update(review_params)
      render json: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /reviews/1
  def destroy
    @comment.destroy
    render json: @comment
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_review
      @comment = Comment.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def review_params
      params.require(:review).permit(:upvote, :content, :user_id, :post_id)
    end
end
