@favorites.each do |favorite|
    json.set! favorite.id do
        json.partial! 'api/favorites/favorite', favorite: favorite
        json.restaurant favorite.restaurant
        json.rating favorite.restaurant.overall_rating
    end
end