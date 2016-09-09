class Match < ApplicationRecord
	has_attached_file :pic1,
		styles: { standard: ["300x300#", :jpg] }

	has_attached_file :pic2,
		styles: { standard: ["300x300#", :jpg] }


	validates_attachment :pic1,
		content_type: { content_type: ["image/jpeg", "image/gif", "image/png"] }


	validates_attachment :pic2,
		content_type: { content_type: ["image/jpeg", "image/gif", "image/png"] }


	def shuffled_deck
		ids = Match.pluck(:id).shuffle
		shuffled_ids = ids[0..3]
		shuffled_ids.each do |id|
			pics_array << { id => Match.find(id).pic1}
			pics_array << { id => Match.find(id).pic2}
		end
		pics_array
	end




end
