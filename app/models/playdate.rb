class Playdate < ApplicationRecord
    has_many :playdate_dogs
    has_many :dogs, through: playdate_dogs
end
