package com.example.dbms.Repository;

import com.example.dbms.POJO.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

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

    public List<Team> getTeams(){
        sql="SELECT name AS teamName, fullName AS fullName FROM \"NAGAAKHIL.BELIDE\".Teams";
        return connection.query(sql, new BeanPropertyRowMapper(Team.class, false));
    }

    public List<Count> getTupleCount(){
        sql="SELECT SUM(NUMTUPLES) AS counter from (\n" +
                "select count(1) AS NUMTUPLES from \"NAGAAKHIL.BELIDE\".Players \n" +
                "    union all select count(1) from \"NAGAAKHIL.BELIDE\".teams \n" +
                "    union all select count(1) from \"NAGAAKHIL.BELIDE\".salaries \n" +
                "    union all select count(1) from \"NAGAAKHIL.BELIDE\".games\n" +
                "    union all select count(1) from \"NAGAAKHIL.BELIDE\".games_details\n" +
                "    union all select count(1) from \"NAGAAKHIL.BELIDE\".playsFor);";
        return connection.query(sql, new BeanPropertyRowMapper(Count.class, false));
    }

    public List<Players> getPlayersOnSearch(String name){
        String nameWithWildcards = "%" + name + "%";
        sql = "SELECT name FROM \"NAGAAKHIL.BELIDE\".Players WHERE UPPER(name) LIKE UPPER(?) AND rownum<10";
        Object[] params = new Object[] { nameWithWildcards.toUpperCase() };
        return connection.query(sql, params, new BeanPropertyRowMapper<>(Players.class, false));
    }

    public List<PlayerSal> query1(String name){
        sql="SELECT A.year, B.points, A.salary\n" +
                "FROM \n" +
                "    (SELECT p.name, s.salary , year\n" +
                "    FROM \"NAGAAKHIL.BELIDE\".Players p\n" +
                "    INNER JOIN \"NAGAAKHIL.BELIDE\".Salaries s ON s.playerID=p.playerID\n" +
                "    WHERE p.name = ? ) A\n" +
                "INNER JOIN \n" +
                "    (select  SUM(total_points) AS Points, season, p.name\n" +
                "    FROM \"NAGAAKHIL.BELIDE\".Players p\n" +
                "    INNER JOIN \"NAGAAKHIL.BELIDE\".games_details gd ON gd.playerID=p.playerID\n" +
                "    INNER JOIN \"NAGAAKHIL.BELIDE\".Games g ON g.gameID=gd.gameID\n" +
                "    WHERE p.name = ? \n" +
                "    GROUP BY season, p.name) B\n" +
                "ON A.name=B.name AND A.year=B.season";
        Object[] params = new Object[] { name, name };
        return connection.query(sql, params, new BeanPropertyRowMapper(PlayerSal.class, false));
    }

    public List<PerfCompare> query2(String name){
        sql="WITH t1 AS (\n" +
                "SELECT playerid, ROUND(AVG(fieldgoalsmade), 4) AS pseasonavg, season FROM (\n" +
                "SELECT playerid, gd.gameid, fieldgoalsmade, season FROM \"NAGAAKHIL.BELIDE\".games_details gd\n" +
                "INNER JOIN \"NAGAAKHIL.BELIDE\".games g ON gd.gameid = g.gameid\n" +
                "WHERE fieldgoalsmade IS NOT NULL)\n" +
                "GROUP BY playerid, season)\n" +
                "\n" +
                "SELECT savg AS points, topavg AS avgOfTop, psavg.season AS season FROM (\n" +
                "SELECT p1.playerid, name, AVG(gd1.fieldgoalsmade) AS savg, season FROM \"NAGAAKHIL.BELIDE\".players p1\n" +
                "INNER JOIN \"NAGAAKHIL.BELIDE\".games_details gd1 ON p1.playerid = gd1.playerid\n" +
                "INNER JOIN \"NAGAAKHIL.BELIDE\".games g1 ON g1.gameid = gd1.gameid\n" +
                "WHERE p1.name = ? AND fieldgoalsmade IS NOT NULL\n" +
                "GROUP BY season, p1.playerid, name) psavg\n" +
                "INNER JOIN (\n" +
                "SELECT AVG(pseasonavg) AS topavg, season FROM\n" +
                "(SELECT playerid, pseasonavg, season, RANK() OVER (PARTITION BY season ORDER BY pseasonavg DESC) rank\n" +
                "FROM t1)\n" +
                "WHERE rank <= 5\n" +
                "GROUP BY season) t5avg\n" +
                "ON psavg.season = t5avg.season\n" +
                "ORDER BY psavg.season";
        Object[] params = new Object[] { name };
        return connection.query(sql, params, new BeanPropertyRowMapper(PerfCompare.class, false));
    }

    public List<PlayerPoints> query3(String name){
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

    public List<PointsAgainst> query4(String name){
        sql="SELECT season, opponent AS team, avgpoints AS points\n" +
                "FROM(\n" +
                "    SELECT name, season, opponent, avgpoints,\n" +
                "    RANK() OVER (PARTITION BY season ORDER BY avgpoints DESC) AS high_rank,\n" +
                "    RANK() OVER (PARTITION BY season ORDER BY avgpoints ASC) AS low_rank\n" +
                "    FROM\n" +
                "        (SELECT p.name, g.season,t.name AS opponent, AVG(total_points) AS avgpoints\n" +
                "        FROM \"NAGAAKHIL.BELIDE\".Players p\n" +
                "        INNER JOIN \"NAGAAKHIL.BELIDE\".games_details gd ON gd.playerID=p.playerID\n" +
                "        INNER JOIN \"NAGAAKHIL.BELIDE\".Games g ON g.gameID=gd.gameID\n" +
                "        INNER JOIN \"NAGAAKHIL.BELIDE\".Teams t ON t.teamID=g.awayteamID\n" +
                "        WHERE p.name = ? AND gd.teamID<>g.awayteamID\n" +
                "        GROUP BY p.name, g.season, t.name)\n" +
                "    )\n" +
                "WHERE high_rank=1 or low_rank=1";
        Object[] params = new Object[] { name };
        List<PointsAgainst> temp = connection.query(sql, params, new BeanPropertyRowMapper(PointsAgainst.class, false));
        return temp;
    }

    public List<eFGMetric> query5(String team1, String team2){
        sql="WITH team_points AS (\n" +
                "SELECT gameid, teamid, ((FGM + 0.5 * TPM)/FGA) AS efg\n" +
                "FROM (\n" +
                "        SELECT gameid, teamid, SUM(fieldgoalsmade) AS FGM, SUM(threepointsthrowsmade) AS TPM, sum(fieldgoalsattempted) AS FGA \n" +
                "        FROM \"NAGAAKHIL.BELIDE\".games_details\n" +
                "        GROUP BY gameid, teamid\n" +
                "        HAVING SUM(fieldgoalsattempted) <> 0)),\n" +
                "        \n" +
                "tm1 AS (        \n" +
                "            SELECT t1.name AS team1, AVG(tp1.efg) AS team1_efg, g1.season AS season FROM team_points tp1\n" +
                "            INNER JOIN \"NAGAAKHIL.BELIDE\".games g1\n" +
                "            ON tp1.gameid = g1.gameid\n" +
                "            INNER JOIN \"NAGAAKHIL.BELIDE\".teams t1\n" +
                "            ON tp1.teamid = t1.teamid\n" +
                "            WHERE t1.name = ? \n" +
                "            GROUP BY g1.season, t1.name\n" +
                "),\n" +
                "tm2 AS (\n" +
                "            SELECT t2.name AS team2, AVG(tp2.efg) AS team2_efg, g2.season AS season FROM team_points tp2\n" +
                "            INNER JOIN \"NAGAAKHIL.BELIDE\".games g2\n" +
                "            ON tp2.gameid = g2.gameid\n" +
                "            INNER JOIN \"NAGAAKHIL.BELIDE\".teams t2\n" +
                "            ON tp2.teamid = t2.teamid\n" +
                "            WHERE t2.name = ? \n" +
                "            GROUP BY g2.season, t2.name\n" +
                ")\n" +
                "select tm1.season, team1, team1_efg, team2, team2_efg AS team2_score from tm1\n" +
                "inner join tm2\n" +
                "ON tm1.season = tm2.season";
        Object[] params = new Object[] { team1, team2 };
        List<eFGMetric> temp = connection.query(sql, params, new BeanPropertyRowMapper(eFGMetric.class, false));
        return temp;
    }
}
