class OwnerController < ApplicationController
    skip_before_action :isAuthorized, only: :create

    def create
        @owner = Owner.create!(owner_params)
        login_owner
        render json: @owner, status: :created
    end 

    private 

    def owner_params 
        params.permit(:email, :first_name, :last_name, :password)
    end

end