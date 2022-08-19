require_relative "../app/models/booking.rb"
# require "test/unit"

describe Booking do
    describe ".tester" do
        context "cat" do
            context "given 2 hours of service" do
                it "returns 30" do
                expect(Booking.add(20)).multiply(5*2).to eql(30)
                end
            end
            context "given 5 hours of service" do
                it "returns 45" do
                expect(Booking.add(20)).multiply(5*5).to eql(45)
                end
            end
        end
        context "dog" do
            context "given 2 hours of service" do
                it "returns 40" do
                expect(Booking.add(20)).multiply(10*2).to eql(40)
                end
            end
            context "given 5 hours of service" do
                it "returns 70" do
                expect(Booking.add(20)).multiply(10*5).to eql(70)
                end
            end
        end
    end
end


# describe Booking do

#     describe ".tester" do
#     context "given animal type is 'cat' and hours requested is 2" do
#       it "returns 30" do
#         expect(Booking.add(20).multiply(2*5)).to eq(30)
#       end
#     end
#     context "given animal type is 'dog' and hours requested is 5" do
#       it "returns 70" do
#         expect(Booking.add(20).multiply(5*10)).to eq(70)
#       end
#     end
#   end
# end



# RSpec.describe Booking do
#     context "#tester" do
#         it { expect(Booking.tester).to eql "total"}
#     end
# end



# describe Booking do

#     describe ".tester" do
#     context "given an animal type is cat" do
#       it "returns total owed" do
#         expect(Booking.add(20).multiply(hours_requested*5)).to eq(total)
#       end
#     end
#     context "given an animal type is dog" do
#       it "returns total owed" do
#         expect(Booking.add(20).multiply(hours_requested*10)).to eq(total)
#       end
#     end
#   end
# end