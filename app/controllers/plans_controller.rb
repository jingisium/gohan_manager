class PlansController < ApplicationController
  def index
  end

  def new
    @plan_ingredient = PlanIngredient.new
  end

  def create
    @plan_ingredient = PlanIngredient.new(plan_params)
    if @plan_ingredient.valid?
      @plan_ingredient.save
      redirect_to root_path
    else
      render :new
    end
  end

  private

  def plan_params
    params.require(:plan_ingredient).permit(:title, :date, :name, :amount, :price)
  end

  # def date_join
  #   year = params[:plan_ingredient]["date(1i)"]
  #   month = params[:plan_ingredient]["date(2i)"]
  #   day = params[:plan_ingredient]["date(3i)"]

  #   if year.empty? || month.empty? || day.empty?
  #     return
  #   end

  #   params[:plan_ingredient][:date] = Date.new year.to_i,month.to_i,day.to_i

  #   year = nil
  #   month = nil
  #   day = nil
  # end
end
