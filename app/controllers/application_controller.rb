class ApplicationController < ActionController::Base
  include ActionController::Cookies
  skip_before_action :verify_authenticity_token

  before_action :isAuthorized

  def current_owner
    Owner.find_by(id: session[:owner_id])
  end

  def login_owner
    session[:owner_id] = @owner.id
  end
  
  def isAuthorized 
    return render json:{error: "Not Authorized"}, status: :unauthorized unless session.include? :owner_id
  end 

end


