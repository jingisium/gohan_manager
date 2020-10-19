class Plan < ApplicationRecord
  has_many :ingredients, dependent: :destroy
  accepts_nested_attributes_for :ingredients

  with_options presence: true do
    validates :title
  end
end
