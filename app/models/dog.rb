class Dog < ApplicationRecord
    has_many :playdate_dogs
    has_many :playdates, through: playdate_dogs
end
