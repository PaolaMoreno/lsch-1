Lsch::Application.routes.draw do
	root 'home#index' 
	match "/:locale" => 'home#index', via: :all, as: :home_page
end
