package com.j.Entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "dress_detail")
@Data
public class Dressdetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String brand;
    private int price;
    private String imgurl;
}