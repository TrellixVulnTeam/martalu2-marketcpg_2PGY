package com.martalu.marketcpg;

import com.martalu.marketcpg.exception.BadRequestException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service

public class VisitorService {

    private final VisitorRepository visitorRepository;

    public List<Visitor> getAllVisitors() {
        return visitorRepository.findAll();
    }

    public void addVisitor(Visitor visitor) {
        //check if email is taken
        Boolean emailExists = visitorRepository
                .selectEmailExists(visitor.getEmail());
        if (emailExists) {
            throw new BadRequestException(
                    "The email " + visitor.getEmail() + " has already scheduled a meeting. Please check your inbox for details, or enter a new one."
            );
        }
        visitorRepository.save(visitor);
    }
}
