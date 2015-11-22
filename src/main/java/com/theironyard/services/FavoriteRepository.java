package com.theironyard.services;

import com.theironyard.entities.Drink;
import com.theironyard.entities.Favorite;
import com.theironyard.entities.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

/**
 * Created by Jack on 11/21/15.
 */
public interface FavoriteRepository extends PagingAndSortingRepository<Favorite, Integer> {
    List<Favorite> findAllByFavUser(User user);
}
