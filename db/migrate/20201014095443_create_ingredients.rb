class CreateIngredients < ActiveRecord::Migration[6.0]
  def change
    create_table :ingredients do |t|
      t.string :name, null: false
      t.string :amount, default: 0
      t.integer :price, default: 0
      t.references :plan, foreign_key: true
      t.timestamps
    end
  end
end
