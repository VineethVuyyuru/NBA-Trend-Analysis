package com.example.dbms.Repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import com.example.dbms.POJO.Players;
import com.example.dbms.POJO.PlayerPoints;
import java.util.List;

@Repository
public class queryRepository {

    @Autowired
    private JdbcTemplate connection;
    public String sql;

    public List<Players> getPlayers(){
        sql = "SELECT name FROM \"NAGAAKHIL.BELIDE\".Players WHERE rownum<20";
        return connection.query(sql, new BeanPropertyRowMapper(Players.class, false));
    }

    public List<Players> getPlayersOnSearch(String name){
        String nameWithWildcards = "%" + name + "%";
        sql = "SELECT name FROM \"NAGAAKHIL.BELIDE\".Players WHERE UPPER(name) LIKE UPPER(?) AND rownum<10";
        Object[] params = new Object[] { nameWithWildcards.toUpperCase() };
        return connection.query(sql, params, new BeanPropertyRowMapper<>(Players.class, false));
    }

    public List<PlayerPoints> query1(String name){
        sql = "SELECT p.name, season, SUM(FieldGoalsMade) AS FieldGoalsMade,\n" + //
                "SUM(FreeThrowsMade) AS FreeThrowsMade, SUM(ThreePointsThrowsMade) AS ThreePointsThrowsMade\n" + //
                "FROM \"NAGAAKHIL.BELIDE\".Players p\n" + //
                "INNER JOIN \"NAGAAKHIL.BELIDE\".games_details gd ON gd.playerID=p.playerID\n" + //
                "INNER JOIN \"NAGAAKHIL.BELIDE\".games g ON g.gameID=gd.gameID AND gd.teamID<>g.awayTeamID\n" + //
                "WHERE p.name = ? \n" + //
                "GROUP BY p.name, season\n" + //
                "ORDER BY 2";
        Object[] params = new Object[] { name };
        return connection.query(sql, params, new BeanPropertyRowMapper(PlayerPoints.class, false));
    }
}
