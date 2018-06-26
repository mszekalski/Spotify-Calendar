Rails.application.routes.draw do
  resources :events, only: [:create, :destroy, :edit, :index, :new, :show, :update]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
