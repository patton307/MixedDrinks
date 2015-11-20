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

    @Column(nullable = false)
    public String ingredient1;

    @Column
    public String ingredient2;

    @Column
    public String ingredient3;

    @Column
    public String ingredient4;

    @Column
    public String ingredient5;

    @Column
    public String ingredient6;

    @Column
    public String ingredient7;

    @Column
    public String ingredient8;

    @Column
    public String ingredient9;

    @Column
    public String ingredient10;

    @Column
    public String ingredient11;

    @Column
    public String ingredient12;

    @ManyToOne
    public User user;

}
