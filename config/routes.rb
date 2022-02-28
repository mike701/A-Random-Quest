Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :users
  resources :posts do 
    resources :comments
  end

  get '/users/:user_id/posts', to: 'posts#get_user_posts'
  get '/comments', to: 'comments#get_all_comments'
  get '/users/:user_id/comments', to: 'comments#get_user_comments'
  get '/users/:user_id/friends', to: 'users#friends'

  post '/auth/login', to: 'authentications#login'
  get '/auth/verify', to: 'authentications#verify'

end
# Prefix Verb   URI Pattern                                                                                       Controller#Action
#                                    users GET                                                                   users#index
#    POST   /users(.:format)                                                                                  users#create
#                                 new_user GET    /users/new(.:format)                                                                              users#new
#                                edit_user GET    /users/:id/edit(.:format)                                                                         users#edit
#                                     user GET    /users/:id(.:format)                                                                              users#show
#                                          PATCH  /users/:id(.:format)                                                                              users#update
#                                          PUT    /users/:id(.:format)                                                                              users#update
#                                          DELETE /users/:id(.:format)                                                                              users#destroy
#                            post_comments GET    /posts/:post_id/comments(.:format)                                                                comments#index
#                                          POST   /posts/:post_id/comments(.:format)                                                                comments#create
#                         new_post_comment GET    /posts/:post_id/comments/new(.:format)                                                            comments#new
#                        edit_post_comment GET    /posts/:post_id/comments/:id/edit(.:format)                                                       comments#edit
#                             post_comment GET    /posts/:post_id/comments/:id(.:format)                                                            comments#show
#                                          PATCH  /posts/:post_id/comments/:id(.:format)                                                            comments#update
#                                          PUT    /posts/:post_id/comments/:id(.:format)                                                            comments#update
#                                          DELETE /posts/:post_id/comments/:id(.:format)                                                            comments#destroy
#                                    posts GET    /posts(.:format)                                                                                  posts#index
#                                          POST   /posts(.:format)                                                                                  posts#create
#                                 new_post GET    /posts/new(.:format)                                                                              posts#new
#                                edit_post GET    /posts/:id/edit(.:format)                                                                         posts#edit
#                                     post GET    /posts/:id(.:format)                                                                              posts#show
#                                          PATCH  /posts/:id(.:format)                                                                              posts#update
#                                          PUT    /posts/:id(.:format)                                                                              posts#update
#                                          DELETE /posts/:id(.:format)                                                                              posts#destroy
#                                          GET    /users/:user_id/posts(.:format)                                                                   posts#get_user_posts
#                                 comments GET    /comments(.:format)                                                                               comments#get_all_comments
#                               auth_login POST   /auth/login(.:format)                                                                             authentications#login
#                              auth_verify GET    /auth/verify(.:format)                                                                            authentications#verify
