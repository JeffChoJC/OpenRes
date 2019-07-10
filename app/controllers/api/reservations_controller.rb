class Api::ReservationsController < ApplicationController
    def create
        @reservation = Reservation.new(reservation_params)
        if @reservation.save
            render "api/reservations/show"
        else
            render json: ["There are no available tables for this day and time. Please try again."], status: 422
        end
    end

    def update
        @reservation = Reservation.find_by(id: params[:id])
        if @reservation.update(reservation_params)
            render "api/reservations/show"
        else
            render json: @reservations.errors.full_messages, status: 422
        end
    end

    def destroy
        @reservation = Reservation.find_by(id: params[:id])
        if @reservation.destroy!
            render "api/reservations/show"
        else
            render json: ["Reservation does not exist."]
        end
    end

    private

    def reservation_params
        params.require(:reservation).permit(
            :date,
            :time,
            :party_size,
            :restaurant_id,
            :user_id
        )
    end
end