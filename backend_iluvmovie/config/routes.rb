Rails.application.routes.draw do
  resources :users
  resources :movies
  resources :favorites
  
  post '/login', to: 'auth#create'
end
