package org.example;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;


public class FactorialTest {
    @Test
    void checkFactorialOfZero(){
        Factorial factorial = new Factorial(0);
        int fact = factorial.fact();
        assertEquals(1,fact);
    }

    @Test
    void checkFactorialOfPositiveNumbers(){
        Factorial factorial = new Factorial(3);
        int fact = factorial.fact();
        assertEquals(6,fact);
    }

    @Test
    void checkFactorialOfNegativeNumbers(){
        Factorial factorial = new Factorial(-3);
        int fact = factorial.fact();
        assertEquals(0,fact);
    }
}
