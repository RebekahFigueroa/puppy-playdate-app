class CreatePlaydates < ActiveRecord::Migration[6.1]
  def change
    create_table :playdates do |t|
      t.string :time
      t.string :age_preference
      t.string :size_preference
      t.string :gender_preference
      t.string :playdate_size_preference
      t.string :location

      t.timestamps
    end
  end
end
