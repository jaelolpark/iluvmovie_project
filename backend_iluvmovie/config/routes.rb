Rails.application.routes.draw do
  resources :users
  
  resources :movies
  resources :favorites
end
