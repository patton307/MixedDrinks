package com.theironyard.services;

import com.theironyard.entities.Drink;
import com.theironyard.entities.User;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

/**
 * Created by Jack on 11/20/15.
 */
public interface DrinkRepository extends PagingAndSortingRepository<Drink, Integer> {
    List<Drink> findAllByUser(User user);
}
