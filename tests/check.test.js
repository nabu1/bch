import { check } from '../public/js/check.js';

describe('I. Incorrect letter or number of letters', () => {
  test('1. returns false for incorrect letter', () => {
      expect(check('cattar')).toBe(false);
  });

  test('2. returns false for incorrect number of letters', () => {
      expect(check('cattacc')).toBe(false);
  });
})

describe('II. Palindroms - simple', () => {
  
  test('1. returns true for "cattac"', () => {
      expect(check('cattac')).toBe(true);
  });

  test('2. returns false for "taccat"', () => {
      expect(check('taccat')).toBe(false);
  });

  test('3. returns true for "CATTAC"', () => {
      expect(check('CATTAC')).toBe(true);
  });

  test('4. returns false for "TACCAT"', () => {
      expect(check('taccat')).toBe(false);
  });
  
  test('5. returns false for "cAttAc"', () => {
      expect(check('cAttAc')).toBe(true);
  });

  test('6. returns true for "tAccAt"', () => {
      expect(check('tAccAt')).toBe(false);
  });
})

describe('III. Palindroms - compound', () => {
  
  test('1. returns true for correct compound palindrome', () => {
      expect(check('catCATTACtac')).toBe(true);
  });

  test('2. returns true for longer correct compound palindrome', () => {
      expect(check('cAtcatCATTACtactAc')).toBe(true);
  });

  test('3. returns false for incorrect compound palindrome', () => {
      expect(check('cAtcatCATTACtactAC')).toBe(false);
  });
})

describe('IV. Palindroms - simple and compound', () => {
  
  test('1. returns true for correct simple and compound palindrome', () => {
      expect(check('cattacCATcattacTAC')).toBe(true);
  });

  test('2. returns true for longer correct simple and compound palindrome', () => {
      expect(check('CATTACcattacCATcattacTAC')).toBe(true);
  });

  test('3. returns false for incorrect last letter', () => {
      expect(check('CATTACcattacCATcattacTAc')).toBe(false);
  });
})

describe('V. Palindroms - compound and simple', () => {
  
  test('1. returns true for correct simple and compound palindrome', () => {
      expect(check('CATcattacTACCATTACcattac')).toBe(true);
  });
  test('2. returns false for incorrectly excessive last letter', () => {
      expect(check('CATcattacTACCATTACcatta')).toBe(false);
  });
  
})

describe('VI. Palindroms - simple, compound and simple', () => {
  
  test('1. returns true for correct palindrome', () => {
      expect(check('cattacCATcattacTACcAttAc')).toBe(true);
  });
  test('2. returns false for incorrectly excessive last letter', () => {
      expect(check('CATTACCATcattacTACcAttAc')).toBe(true);
  });
})

describe('VII. Palindroms - compound, simple and compound', () => {
  
  test('1. returns true for correct palindrome', () => {
      expect(check('CATcattacTACcattacCATcattacTAC')).toBe(true);
  });
  test('2. returns false for incorrectly excessive last letter', () => {
      expect(check('CATcattacTACcattacCATcattacTAA')).toBe(false);
  });
})
