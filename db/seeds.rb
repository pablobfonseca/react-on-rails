10.times do |n|
  Item.create!(name: "Item #{n}", description: "Description #{n}")
end
