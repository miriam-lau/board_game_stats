Rails.application.routes.draw do
  # get 'pages/index'
  resources :pages, only: :index
  resources :games, only: [:index, :create]

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
