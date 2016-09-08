class AddAttachmentPic1Pic2ToMatches < ActiveRecord::Migration
  def self.up
    change_table :matches do |t|
      t.attachment :pic1
      t.attachment :pic2
    end
  end

  def self.down
    remove_attachment :matches, :pic1
    remove_attachment :matches, :pic2
  end
end
