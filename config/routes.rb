Rails.application.routes.draw do
 
  root "static#index"

  namespace :v1, defaults: {format: 'json'} do
    get 'greeting', to: 'messages#index'
  end

  get "*page", to: 'static#index', constraints: ->(req) do 
    !req.xhr? && req.format.html?
  end

end
