const romanToInt = function (s) {
  let result = 0;
  for (let i = 0; s[i]; i++)
  {
    if (s[i] === 'I' && s[i + 1] === 'V')
      result += 4, i++;
    else if (s[i] === 'I' && s[i + 1] === 'X')
      result += 9, i++;
    else if (s[i] === 'X' && s[i + 1] === 'L')
      result += 40, i++;
    else if (s[i] === 'X' && s[i + 1] === 'C')
      result += 90, i++;
    else if (s[i] === 'C' && s[i + 1] === 'D')
      result += 400, i++;
    else if (s[i] === 'C' && s[i + 1] === 'M')
      result += 900, i++;
    else if (s[i] === 'I')
      result += 1;
    else if (s[i] === 'V')
      result += 5;
    else if (s[i] === 'X')
      result += 10;
    else if (s[i] === 'L')
      result += 50;
    else if (s[i] === 'C')
      result += 100;
    else if (s[i] === 'D')
      result += 500;
    else if (s[i] === 'M')
      result += 1000;
  }
  return result;
};

const result1 = romanToInt("III"); // 3
console.log(result1);

const result2 = romanToInt("LVIII"); // 58
console.log(result2);

const result3 = romanToInt("MCMXCIV"); //1994
console.log(result3);

const result4 = romanToInt("IX");
console.log(result4); // 9
