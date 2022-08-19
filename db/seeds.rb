type = ["cat", "dog"]

5.times do 
    first_name = Faker::Name.first_name
    last_name = Faker::Name.last_name
    animal_name = Faker::Name.first_name
    animal_type = type.sample
    hours_requested = Faker::Number.between(from: 2, to: 8)
    date_of_service = Faker::Date.between(from: '2014-09-23', to: '2014-09-25')
    Booking.create(first_name: first_name, last_name: last_name, animal_name: animal_name, animal_type: animal_type, hours_requested: hours_requested, date_of_service: date_of_service)
end