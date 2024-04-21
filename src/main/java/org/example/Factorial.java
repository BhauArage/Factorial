package org.example;

public class Factorial {
    private final int number;

    public Factorial(int number) {
        this.number = number;
    }

    public int fact() {
        if(number>0){
            int fact=number;
            for(int i=number-1;i>1;i--){
                fact*=i;
            }
            return fact;
        }
        if(number==0) return 1;//0!=1
        return 0;//for negative numbers
    }
}
