class UserSerializer < ActiveModel::Serializer
  has_many :favorites
  has_many :users, through: :favorites
  
  attributes :id, :username
end
