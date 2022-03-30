package com.martalu.marketcpg;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@ToString
@Getter
@Setter
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table
public class Visitor {
    @Id
    @SequenceGenerator(
            name = "visitor_sequence",
            sequenceName = "visitor_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            generator = "visitor_sequence",
            strategy = GenerationType.SEQUENCE
    )
    private Long id;
    @NotBlank
    @Column(nullable = false)
    private String firstName;
    @NotBlank
    @Column(nullable = false)
    private String lastName;
    @Email
    @Column(nullable = false, unique = true)
    private String email;
//    @Enumerated(EnumType.STRING) private Gender gender;

    public Visitor(
            String firstName,
            String lastName,
            String email
//            Gender gender
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
//        this.gender = gender;
    }
}
