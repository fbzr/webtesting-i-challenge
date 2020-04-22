const enhancer = require('./enhancer.js');

const item = {
    name: 'test',
    enhancement: 16,
    durability: 72
}

// test away!
describe('enhancer.js', () => {
    // test case
    it('should run tests without errors', () => {
        // arrange --> setup the world
        // act --> execute the code we're testing
        // assert --> checkout assumptions
        expect(true).toBe(true);
    });

    describe('test repair function', () => {
        it('should return an object with durability equal to 100', () => {
            expect(enhancer.repair(item)).toEqual({
                ...item,
                durability: 100
            });
        });
    });

    describe('test succeed function', () => {
        it('should increase objecs enhancement property by 1 and it should not pass limit (20)', () => {
            expect(enhancer.succeed(item)).toEqual({
                ...item,
                enhancement: item.enhancement < 20 ? item.enhancement + 1 : 20
            });
        });
    });


    describe('test fail function', () => {
        it('should decrease objecs durability property by 5 if enhancement is less than 15 and by 10 if it is 15 of more', () => {
            expect(enhancer.fail(item).durability).toBe(62);
        });
        it('should decrease objects enhancement level by 1 if it is greater than 16', () => {
            expect(enhancer.fail(item).enhancement).toBe(16);
        });
    });
});