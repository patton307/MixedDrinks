package com.theironyard.entities;

import javax.persistence.*;

/**
 * Created by Jack on 11/21/15.
 */
@Entity
@Table(name = "favorites")
public class Favorite {
    @Id
    @GeneratedValue
    @Column(nullable = false)
    public int id;

    @ManyToOne
    public Drink drink;

    @ManyToOne
    public User favUser;
}
