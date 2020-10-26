class Plan < ApplicationRecord
  has_many :ingredients, dependent: :destroy
  has_one_attached :image
  accepts_nested_attributes_for :ingredients

  with_options presence: true do
    validates :title
  end
end
