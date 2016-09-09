class HomeController < ApplicationController
  def index
  	@cards = Match.shuffled_deck

  end
end
