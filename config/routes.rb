Rails.application.routes.draw do
  root to: "plans#index"
  resources :plans, only: [:index, :new, :create, :show, :destroy]
end
