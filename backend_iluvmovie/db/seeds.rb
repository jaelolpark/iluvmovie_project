# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Favorite.destroy_all
Movie.destroy_all


u1 = User.create(username: 'jae', password: '123')

m1 = Movie.create(title: 'Kill', genre: 'horror', poster: '1', search_id: '2')

f1 = Favorite.create(user: u1, movie: m1)

