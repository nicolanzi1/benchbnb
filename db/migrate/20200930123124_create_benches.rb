class CreateBenches < ActiveRecord::Migration[5.2]
  def change
    create_table :benches do |t|
      t.string :description
      t.float :lat
      t.float :lng
      t.integer :seating, default: 2, null: false

      t.timestamps
    end
  end
end
