import { check } from '../public/js/check.js';

test('returns true for "cattac"', () => {
    expect(check('cattac')).toBe(true);
});

test('returns false for "taccat"', () => {
    expect(check('taccat')).toBe(false);
});