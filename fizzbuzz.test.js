const fizzbuzz = require('./fizzbuzz')

test('divide by 3 return Fizz', () => {
    for(i = 1;i<=50;i++){
        if(i % 3 === 0 && i % 5 !== 0){
            expect(fizzbuzz(i)).toBe("Fizz");  
        }
    }
})

test('divide by 5 return Buzz', () => {
    for(i = 1;i<=50;i++){
        if(i % 5 === 0 && i % 3 !== 0){
            expect(fizzbuzz(i)).toBe("Buzz");  
        }
    }
})

test('divide by 3 and 5', () => {
    for(i = 1;i<=50;i++){
        if(i % 3 === 0 && i % 5 === 0){
            expect(fizzbuzz(i)).toBe("FizzBuzz");  
        }
    }
})

test('indivisible 3 and 5', () => {
    for(i = 1;i<=50;i++){
        if(i % 3 !== 0 && i % 5 !== 0){
            expect(fizzbuzz(i)).toBe(i);  
        }
    }
})
