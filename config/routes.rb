Rails.application.routes.draw do
  get 'matches/index'

  get 'matches/show'

  get 'matches/new'

  get 'matches/edit'

  root 'home#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
