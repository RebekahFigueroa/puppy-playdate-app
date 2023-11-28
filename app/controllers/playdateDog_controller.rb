class PlaydateDogController < ApplicationController

  def addPlaydateDog
      playdateDog = PlaydateDog.create!(
          toys: playdateDog_params[:toys], 
          comment: playdateDog_params[:comment],
          dog_id: playdateDog_params[:dog_id],
          playdate_id: playdateDog_params[:playdate_id],

      )
      render json: playdateDog, status: :created
  end 

  def getPlaydateDogs

    playdateDogs = PlaydateDog.where(playdate_id: params[:playdate_id])
    rsvps = playdateDogs.map { |rsvp| rsvp.attributes.merge(dog: Dog.find(rsvp.dog_id)) }


    render json: rsvps, status: :ok
  end 

  def editPlaydateDog
    playdateDog = PlaydateDog.find_by(id: params[:id])
    if playdateDog
      playdateDog.update(playdateDog_params)
      render json: playdateDog
    else 
      render json: { error: "PlaydateDog not found" }, status: :not_found
    end 
  end 

  def deletePlaydateDog
    PlaydateDog.destroy(params[:id])
    head :no_content
  end 

  private 

  def playdateDog_params 
      params.permit(:toys, :comment, :dog_id, :playdate_id)
  end

end