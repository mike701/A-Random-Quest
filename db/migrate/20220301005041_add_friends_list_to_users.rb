class AddFriendsListToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :friendsList, :string
  end
end
