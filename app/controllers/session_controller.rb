class SessionController < ApplicationController
    skip_before_action :isAuthorized, only: :create
    def create
        @owner = Owner.find_by(email: params[:email])
        if @owner&.authenticate(params[:password])
            login_owner
            render json: @owner, status: :created
        else 
            render json: {error: {login: "Invalid email or password"}}, status: :unauthorized
        end 
    end 


    def destroy
        session.delete :owner_id 
        head :no_content
    end

end