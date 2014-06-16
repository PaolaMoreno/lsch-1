Lsch::Application.routes.draw do
	scope "/:locale" do
	  root 'home#index'
	end
  
end
