package com.martalu.marketcpg;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface VisitorRepository
        extends JpaRepository<Visitor, Long> {
    @Query("" +
            "SELECT CASE WHEN COUNT(v) > 0 THEN " +
            "TRUE ELSE FALSE END " +
            "FROM Visitor v " +
            "WHERE v.email = ?1"
    )
    Boolean selectEmailExists(String email);
}
