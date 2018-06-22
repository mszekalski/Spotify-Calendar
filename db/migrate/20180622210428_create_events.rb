class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :description
      t.date :date
      t.time :start
      t.time :end
      t.timestamps
    end
  end
end
