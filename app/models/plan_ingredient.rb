class PlanIngredient
  include ActiveModel::Model
  include ActiveRecord::AttributeAssignment
  attr_accessor :title, :date, :name, :amount, :price

  with_options presence: true do
    validates :name
    validates :amount
    validates :title
  end

  def save
    plan = Plan.create(title: title, date: date)
    Ingredient.create(name: name, amount: amount, price: price, plan_id: plan.id)
  end
end