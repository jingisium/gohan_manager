class Ingredient < ApplicationRecord
  belongs_to :plan

  with_options presence: true do
    validates :name
    validates :amount
  end
end
