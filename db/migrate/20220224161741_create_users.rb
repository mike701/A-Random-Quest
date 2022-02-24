class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :email
      t.string :password_digest
      t.string :friend, array: true, default: [], null: true, foreign_key: true

      t.timestamps
    end
  end
end
