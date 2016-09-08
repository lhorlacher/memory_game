class HomeController < ApplicationController
  def index
  	@numbers = [1,1,2,2,3,3,4,4].shuffle
  end
end
