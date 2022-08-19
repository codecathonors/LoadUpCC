class Booking < ApplicationRecord
    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :animal_name, presence: true
    validates :animal_type, inclusion: { in: %w(dog cat)}
    validates :hours_requested, numericality: { in: 2..5 }
    validate :tester

        def tester
            if animal_type === "cat" 
                total = 20 + (hours_requested * 5)
                print "You owe $#{total} dollars for #{animal_name}'s sitter service."
            elsif animal_type === "dog" 
                total = 20 + (hours_requested * 10)
                print "You owe $#{total} dollars for #{animal_name}'s sitter service."
            end
        end
end
