package com.theironyard.services;

import com.theironyard.entities.Favorite;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by Jack on 11/21/15.
 */
public interface FavoriteRepository extends CrudRepository<Favorite, Integer> {

}
