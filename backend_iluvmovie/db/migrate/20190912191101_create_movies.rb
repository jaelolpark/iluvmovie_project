class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :genre
      t.integer :search_id
      t.string :poster


      t.timestamps
    end
  end
end
