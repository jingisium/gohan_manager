class CreateIngredients < ActiveRecord::Migration[6.0]
  def change
    create_table :ingredients do |t|
      t.string :name, null: false
      t.integer :amount, null: false
      t.integer :price
      t.references :plan, foreign_key: true
      t.timestamps
    end
  end
end
