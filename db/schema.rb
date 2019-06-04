# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_06_04_160258) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "restaurants", force: :cascade do |t|
    t.string "name", null: false
    t.text "description"
    t.string "cuisine"
    t.string "address", null: false
    t.string "city", null: false
    t.string "state", null: false
    t.string "zipcode", null: false
    t.string "phone_number", null: false
    t.time "open_time"
    t.time "close_time"
    t.decimal "rating"
    t.string "price_range"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "owner_id", null: false
    t.index ["address"], name: "index_restaurants_on_address", unique: true
    t.index ["city"], name: "index_restaurants_on_city"
    t.index ["cuisine"], name: "index_restaurants_on_cuisine"
    t.index ["name"], name: "index_restaurants_on_name", unique: true
    t.index ["owner_id"], name: "index_restaurants_on_owner_id"
    t.index ["phone_number"], name: "index_restaurants_on_phone_number", unique: true
    t.index ["state"], name: "index_restaurants_on_state"
    t.index ["zipcode"], name: "index_restaurants_on_zipcode"
  end

  create_table "users", force: :cascade do |t|
    t.string "fname", null: false
    t.string "lname", null: false
    t.string "phone_number"
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["fname"], name: "index_users_on_fname"
    t.index ["lname"], name: "index_users_on_lname"
    t.index ["phone_number"], name: "index_users_on_phone_number", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
