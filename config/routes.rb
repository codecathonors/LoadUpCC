Rails.application.routes.draw do
  resources :bookings, only: [:index, :show, :create]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  post '/bookings', to: 'bookings#create'
end
