class CreatePlaydateDogs < ActiveRecord::Migration[6.1]
  def change
    create_table :playdate_dogs do |t|
      t.references :playdate, index: true, foreign_key: true
      t.references :dog,  index: true, foreign_key: true
      t.boolean :toys
      t.string :toy_description

      t.timestamps
    end
  end
end
