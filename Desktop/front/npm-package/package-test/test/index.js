const assert = require('assert');
const expect = require('chai').expect;
import { compact, reverseString, truncateString, capitalizeEveryWord, union, difference } from '../src/index';


describe('Array are equal', function() {
    it('passes if arrays are equal', function() {
        const testCompact = compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]);
        expect(testCompact).to.have.all.members([ 1, 2, 3, 'a', 's', 34 ]);
    });
});

describe('String Reverse', function() {
    it('passes if string reverse', function() {
        expect(reverseString('foobar')).equal('raboof');
    });
});

describe('String Truncate', function() {
    it('passes if string contain ...', function() {
        expect(truncateString('boomerang', 7)).include('...');
    });
});

describe('capitalizeEveryWord', function() {
    it('passes if string capitalizeEveryWord', function() {
        expect(capitalizeEveryWord('hello world!')).equal('Hello World!');
    });
});

describe('Array Union', function() {
    it('passes if Union return array', function() {
        const testUnion = union([1, 2, 3], [4, 3, 2]);
        expect(testUnion).to.be.an('array');
    });
});

describe('Array Difference', function() {
    it('passes if difference instanceof array', function() {
        const testDifference = difference([1, 2, 3], [1, 2, 4]);
        expect(testDifference).to.be.instanceof(Array);
    });
});