class CreateDogs < ActiveRecord::Migration[6.1]
  def change
    create_table :dogs do |t|
      t.belongs_to :owner, null: false, foreign_key: true
      t.string :name
      t.integer :age
      t.string :size
      t.string :gender
      t.string :image

      t.timestamps
    end
  end
end
