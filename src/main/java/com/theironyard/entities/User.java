package com.theironyard.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Created by Jack on 11/19/15.
 */

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue
    int id;
}
