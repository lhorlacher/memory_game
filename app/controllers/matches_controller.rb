class MatchesController < ApplicationController
	before_action :match, except: [:index, :new, :create]

  def index
  	@matches = Match.all
  end

  def show
  end

  def new
  	@match = Match.new
  end

  def create
  	@match = Match.new(match_params)

  	if @match.save
  		redirect_to matches_path
  	else
  		render(:new)
  	end
  end

  def edit
  end

  def update
  	if @match.update(match_params)
  		redirect_to matches_path
  	else
  		render(:edit)
  	end
  end

  def destroy
  	@match.destroy
  	redirect_to matches_path
  end

  private

  def match_params
  	params.require(:match).permit(:pair_name, :pic1, :pic2)
  end

  def match
  	@match = Match.find(params[:id])
  end

end
