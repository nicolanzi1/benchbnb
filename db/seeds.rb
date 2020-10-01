# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Bench.delete_all
User.delete_all
Review.destroy_all

b1 = Bench.create!(
    description: 'alamo square, many dogs',
    seating: 4,
    lat: 37.775769,
    lng: -122.434960,
)

b2 = Bench.create!(
    description: 'UN plaza, food truck access',
    seating: 2,
    lat: 37.779760,
    lng: -122.413820,
)

Bench.create!(
    description: 'Ocean Beach, gnarly breh',
    seating: 3,
    lat: 37.769996,
    lng: -122.511281,
)

u1 = User.create!(
    username: 'guest',
    password: 'password'
)

u2 = User.create!(
    username: 'username',
    password: 'password'
)

Review.create(author_id: u1.id, bench_id:  b1.id, body: "very good sits", rating: 5)
Review.create(author_id: u2.id, bench_id:  b2.id, body: "its okay sit", rating: 3)