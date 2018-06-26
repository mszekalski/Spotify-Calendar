class EventsController < ApplicationController
  def new
    @event = Event.new
  end

  def create
    @event = Event.new(event_params)
    if @event.save


    else
      flash.now[:errors] = @event.errors.full_messages
      render :new
    end
  end

  def update
    @event = events.find(params[:id])
    if @event.update_attributes(event_params)
      redirect_to event_url(@event)
    else
      flash.now[:errors] = @event.errors.full_messages
      render :edit
    end
  end

  def edit
    @event = Event.find(params[:id])
  end

  def destroy
    event = Event.find(params[:id])
    event.destroy
  end

  def index
    @events = Event.all
  end

  def show
    @event = Event.find(params[:id])
  end

  private
 def event_params
   params.require(:event).permit(:description, :start_time, :end_time, :start_date, :end_date)
 end
end
