require_relative 'Auth'

puts("ID!!")
input_id = gets.chomp()
if Auth.login(input_id)
  puts("Id is " + input_id)
else
  puts("Who are you?")
end
