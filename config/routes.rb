Rails.application.routes.draw do
  
  get "/auth", to: "auth#auth"

  post "/owner", to: "owner#create"

  post "/login", to: "session#create"
  delete "/logout", to: "session#destroy"

  get "/dogs", to: "dog#dogsByOwner"
  get "/dogs/:id", to: "dog#dogsById"
  post "/dogs", to: "dog#addDog"
  delete "/dogs/:id", to: "dog#removeDog"

  get "/playdates", to: "playdate#getAllPlaydates"
  post "/playdates", to: "playdate#addPlaydate"

  get "/playdateDogs/:playdate_id", to: "playdate_dog#getPlaydateDogs"
  post "/playdateDogs", to: "playdate_dog#addPlaydateDog"
  patch "/playdateDogs/:id", to: "playdate_dog#editPlaydateDog"
  delete "/playdateDogs/:id", to: "playdate_dog#deletePlaydateDog"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
