function majorityNumberChallenge(nums) {
  const freqArr = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num in freqArr) {
      freqArr[num] += 1;
    } else {
      freqArr[num] = 1;
    }
  }

  for (const num in freqArr) {
    if (freqArr[num] > nums.length / 2) {
      return num;
    }
  }

  return null;
}

console.log(majorityNumberChallenge([2, 2, 1, 1, 1, 2, 2]));
console.log(majorityNumberChallenge([3, 2, 3]));
