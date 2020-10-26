class PlansController < ApplicationController
  def index
    @plans = Plan.all
  end

  def new
    @plan = Plan.new
  end

  def create
    @plan = Plan.new(plan_params)
    @ingredient = Ingredient.new(ingredient_params)
    
    if @plan.save && create_ingredients(@plan.id)
      redirect_to root_path
    else
      render :new
    end
  end

  def show
  end

  private

  def plan_params
    params.permit(:title, :date, :image)
  end

  def ingredient_params
    params.permit(name: [], amount: [], price: [])
  end

  def create_ingredients(plan_id)
    params[:name].each_with_index do |name, i|
      amount = params[:amount][i]
      price = params[:price][i]
      Ingredient.create(name: name, amount: amount, price: price, plan_id: @plan.id)
    end
  end
end
