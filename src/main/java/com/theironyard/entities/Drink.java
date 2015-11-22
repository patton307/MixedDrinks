package com.theironyard.entities;

import javax.persistence.*;

/**
 * Created by Jack on 11/20/15.
 */

@Entity
@Table(name = "drinks")
public class Drink {
    @Id
    @GeneratedValue
    @Column(nullable = false)
    public int id;

    @Column(nullable = false)
    public String name;

    public String ingredient1;

    public String ingredient2;

    public String ingredient3;

    public String ingredient4;

    public String ingredient5;

    public String ingredient6;

    public String ingredient7;

    public String ingredient8;

    public String ingredient9;

    public String ingredient10;

    public String ingredient11;

    public String ingredient12;

    public boolean isFav;


    @ManyToOne
    public User user;

}