# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2023_08_30_191120) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "dogs", force: :cascade do |t|
    t.bigint "owner_id", null: false
    t.string "name"
    t.integer "age"
    t.string "size"
    t.string "gender"
    t.string "image"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["owner_id"], name: "index_dogs_on_owner_id"
  end

  create_table "owners", force: :cascade do |t|
    t.string "password_digest"
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "playdate_dogs", force: :cascade do |t|
    t.bigint "playdate_id"
    t.bigint "dog_id"
    t.boolean "toys"
    t.string "comment"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["dog_id"], name: "index_playdate_dogs_on_dog_id"
    t.index ["playdate_id"], name: "index_playdate_dogs_on_playdate_id"
  end

  create_table "playdates", force: :cascade do |t|
    t.string "time"
    t.string "age_preference"
    t.string "size_preference"
    t.string "gender_preference"
    t.string "playdate_size_preference"
    t.string "location"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "dogs", "owners"
  add_foreign_key "playdate_dogs", "dogs"
  add_foreign_key "playdate_dogs", "playdates"
end
