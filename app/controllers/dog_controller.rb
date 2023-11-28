class DogController < ApplicationController

    def dogsByOwner
        dogs = Dog.where(owner_id: current_owner.id)
        render json: dogs, status: :ok
    end 

    def dogsById
        dog = Dog.find_by(id: params[:id])
        render json: dog, status: :ok
    end 

    def addDog
        dog = Dog.create!(
            owner_id: current_owner.id, 
            name: dog_params[:name], 
            image: dog_params[:image],
            age: dog_params[:age],
            gender: dog_params[:gender],
            size: dog_params[:size]
        )
        render json: dog, status: :created
    end 


    def removeDog
        Dog.destroy(params[:id])
        head :no_content
    end 

    private 

    def dog_params 
        params.permit(:name, :image, :age, :gender, :size)
    end

end