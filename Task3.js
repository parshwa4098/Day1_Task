function reverseVowels(s) {
  let vowels = 'aeiouAEIOU';
  let arr = s.split('');
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (vowels.includes(arr[left]) && vowels.includes(arr[right])) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    } else {
      if (!vowels.includes(arr[left])) left++;
      if (!vowels.includes(arr[right])) right--;
    }
  }

  return arr.join('');
}

console.log(reverseVowels("IceCream"))