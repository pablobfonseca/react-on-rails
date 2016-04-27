class Item < ActiveRecord::Base
  scope :recent, -> { all.order(:updated_at) }
end
