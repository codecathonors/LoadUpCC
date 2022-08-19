class BookingsController < ApplicationController
    # skip_before_action :verify_authenticity_token

    # @tester = Booking.tester()

    def index
        bookings = Booking.all
        render json: bookings, status: :ok
    end

    def show
        booking = Booking.find_by!(id: params[:id])
        render json: booking, status: :ok
    end

    def create
        booking = Booking.create!(booking_params)
        render json: booking, status: :created
    end

    private

    def booking_params
        params.require(:booking).permit(:first_name, :last_name, :animal_name, :animal_type, :hours_requested, :date_of_service, :tester)
    end
end
