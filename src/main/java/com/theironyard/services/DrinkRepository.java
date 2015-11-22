package com.theironyard.services;

import com.theironyard.entities.Drink;
import com.theironyard.entities.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

/**
 * Created by Jack on 11/20/15.
 */
public interface DrinkRepository extends PagingAndSortingRepository<Drink, Integer> {
    List<Drink> findAllByUser(User user);

  /*  @Query("Select d from Drink d where isFav = true")
    List <Drink> findAllByIsFav(User user);
    */
}
