class HomeController < ApplicationController
  def index
  	@cards = Match.shuffled_deck(params[:match_count])
  end
end
