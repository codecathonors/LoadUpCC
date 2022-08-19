class BookingSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :animal_name, :animal_type, :hours_requested, :date_of_service
end
