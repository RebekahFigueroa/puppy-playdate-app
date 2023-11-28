class Dog < ApplicationRecord
    belongs_to :owner

    has_many :playdate_dogs
    has_many :playdates, through: :playdate_dogs
end
