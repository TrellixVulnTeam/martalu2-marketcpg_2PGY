package com.martalu.marketcpg;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping(path = "api/v1/visitors")
@AllArgsConstructor

public class VisitorController {

    private final VisitorService visitorService;

    @GetMapping
    public List<Visitor> getAllVisitors(){
        return visitorService.getAllVisitors();
    }

    @PostMapping
    public void addVisitor(@Valid @RequestBody Visitor visitor) {
        visitorService.addVisitor(visitor);
        //this allows to create a button to add visitors
    }
}
