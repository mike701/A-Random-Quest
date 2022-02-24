class PostsController < ApplicationController
  before_action :set_product, only: %i[ show update destroy ]
  before_action :authorize_request, only: [:create, :update, :destroy, :get_user_products]

  # GET /products
  def index
    @posts = Product.all

    render json: @posts
  end

  # Get /users/:user_id/products
  def get_user_products
    @user = User.find(params[:user_id])
    render json: @user.products
  end

  # GET /products/1
  def show
    render json: @post, include: :reviews
  end

  # POST /products
  def create
    @post = Product.new(product_params)
    @post.user = @current_user

    if @post.save
      render json: @post, status: :created, location: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /products/1
  def update
    if @post.update(product_params)
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
    def set_product
      @post = Product.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def product_params
      params.require(:post).permit(:title, :content, :category, :user_id)
    end
end
