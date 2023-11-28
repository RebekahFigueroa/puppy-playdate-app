# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

owner1 = Owner.create(password: "pass1234", first_name: "Jan", last_name: "Smiff", email: "smiff@gmail.com")

dog1 = Dog.create(owner_id: owner1.id, name: "Nutella", age: 1, size: "small", gender: "Female", image: "https://www.dailypaws.com/thmb/8yH7AdO65206BX2KrwbYdIDTOxU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/pomeranian-beach-1190837479-2000-c77ef52b4c7f495e971de9873c8bdea2.jpg", playdate_dogs: [])
dog2 = Dog.create(owner_id: owner1.id, name: "Nina", age: 4, size: "medium", gender: "Female", image: "https://www.akc.org/wp-content/uploads/2017/11/Miniature-American-Shepherd-puppy-outdoors.jpg")
dog3 = Dog.create(owner_id: owner1.id, name: "Twix", age: 5, size: "small", gender: "Male", image: "https://image.petmd.com/files/styles/978x550/public/2023-08/shih-poo-dog-breed.jpg")

