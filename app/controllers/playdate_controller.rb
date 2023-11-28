class PlaydateController < ApplicationController

  def getAllPlaydates
    playdates = Playdate.all
    render json: playdates, status: :ok
  end 

  def addPlaydate
      playdate = Playdate.create!(
          time: playdate_params[:time], 
          location: playdate_params[:location],
          age_preference: playdate_params[:agePreference],
          gender_preference: playdate_params[:genderPreference],
          size_preference: playdate_params[:sizePreference],
          playdate_size_preference: playdate_params[:playdateSizePreference]
      )
      render json: playdate, status: :created
  end 

  private 

  def playdate_params 
      params.permit(:time, :location, :agePreference, :genderPreference, :sizePreference, :playdateSizePreference)
  end

end