class Plan < ApplicationRecord
  has_many :ingredients, dependent: :destroy
  has_one_attached :image

  with_options presence: true do
    validates :title
  end
end
