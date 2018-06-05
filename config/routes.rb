Rails.application.routes.draw do
  get '/components', to: 'components#index'

  devise_for :users

  resources :lists do
    member do
      patch :move
    end
  end

  resources :cards do
    member do
      patch :move
    end
  end

  root to: 'lists#index'
end
