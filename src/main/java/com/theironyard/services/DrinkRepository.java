package com.theironyard.services;

import com.theironyard.entities.Drink;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 * Created by Jack on 11/20/15.
 */
public interface DrinkRepository extends PagingAndSortingRepository<Drink, Integer> {
}
