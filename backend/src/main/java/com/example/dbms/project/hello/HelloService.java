package com.example.dbms.project.hello;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import com.example.dbms.project.hello.Players;

@Service
public class HelloService {
    
    @Autowired
    private JdbcTemplate jdbcTemplate;

    public List<Players> getPlayer(){
        String sql = "SELECT name FROM Players WHERE rownum<20";
        return jdbcTemplate.query(sql, new BeanPropertyRowMapper(Players.class, false));
 
    }

    public List<WCountry> getCountries(){
        String sql = "SELECT * FROM Wcountry WHERE rownum<10";
        return jdbcTemplate.query(sql, new BeanPropertyRowMapper(WCountry.class, false));
    }
}
