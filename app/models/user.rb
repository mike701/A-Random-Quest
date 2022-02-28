class User < ApplicationRecord
  has_secure_password
  has_many :posts, dependent: :destroy
  has_many :comments, through: :post,dependent: :destroy


  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  attr_accessible :friend
  serialize :friend
  #validates :password, length: { minimum: 6 }
end
