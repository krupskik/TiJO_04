describe('app', function () {
    'use strict';
    var app = window.app;

    describe('Division function', function () {
        it('should divide number a by b', function () {
            expect(app.divide(10, 5)).toEqual(2);
            expect(app.divide(15, 3)).toEqual(5);
        });
        it('should divide number a by b only when a is more than 1 and less than 100', function () {
            expect(app.divide(20, 5)).toEqual(4);
        });
        it('should return false when a is less than 1', function () {
            expect(app.divide(-2, 6)).toEqual(false);
        });
        it('should return false when a is more than 100', function () {
            expect(app.divide(105, 3)).toEqual(false);
        });
        it('should divide number a by b when a is 1', function () {
            expect(app.divide(1, -1)).toEqual(-1);
        });
        it('should divide number a by b when a is 100', function () {
            expect(app.divide(100, 10)).toEqual(10);
        });
        it('should divide number a by b when a is 0', function () {
            expect(app.divide(0, 1)).toEqual(false);
        });
        it('should divide number a by b when a is 101', function () {
            expect(app.divide(101, 10)).toEqual(false);
        });
        it('should return false when b is grater than a', function () {
            expect(app.divide(101, 103)).toEqual(false);
        });
        it('should return false when b is equal 0', function () {
            expect(app.divide(101, 0)).toEqual(false);
        });
    });


    describe('getDescendingNumbers', function () {
        it(' should return descending numbers from number a to b', function () {
            expect (app.getDescendingNumbers(10, 3)).toEqual('10 9 8 7 6 5 4 3')
            expect (app.getDescendingNumbers(3, -5)).toEqual('3 2 1 0 -1 -2 -3 -4 -5')
        });
        it('should return false when b is bigger than a', function () {
            expect (app.getDescendingNumbers(5, 10)).toEqual(false);
        });
        it('should return false when b equal a', function () {
            expect (app.getDescendingNumbers(5, 5)).toEqual(false);
        });
    });


    describe ('areaOfTrapezoid', function () {
        it (' should return area of trapezoid', function () {
        expect (app.areaOfTrapezoid(1, 1, 2)).toEqual(2);
        expect (app.areaOfTrapezoid(5, 5, 3)).toEqual(15);
        });
        it ('should return false when a is smaller than 0', function () {
            expect (app.areaOfTrapezoid(-5, 3, 3)).toEqual(false);
        });
        it ('should return false when b is smaller than 0', function () {
            expect (app.areaOfTrapezoid(4, -5, 4)).toEqual(false);
        });
        it ('should return false when h is smaller than 0', function () {
            expect (app.areaOfTrapezoid(6, 5, -5)).toEqual(false);
        });
    });


    describe ('maxArray', function (){
        it (' should return max number from array', function () {
        expect (app.maxArray([1, 5, 9])).toEqual(9);
        expect (app.maxArray([4, 8, 6])).toEqual(8);
    })
        it (' should return false when array contain not numerical', function () {
            expect (app.maxArray(['a', 'b', 'c'])).toEqual(false);
            expect (app.maxArray(['a', 4, 6])).toEqual(false);
            expect (app.maxArray([5, 'b', 7])).toEqual(false);
            expect (app.maxArray([8, 1, 'c'])).toEqual(false);
        })
    });


    describe ('squareOdd', function () {
        it (' should return array with square odd numbers and numbers of base array', function () {
        expect (app.squareOdd([1, 3, 6])).toEqual([1, 9, 6]);
        expect (app.squareOdd([2, 4, 7])).toEqual([2, 4, 49]);
        })
        it (' should return array with unchanged even numbers and strings of base array', function () {
            expect (app.squareOdd([2, 4, 6])).toEqual([2, 4, 6]);
            expect (app.squareOdd(['a', 'b', 'c'])).toEqual(['a', 'b', 'c']);
        })
    });
});
