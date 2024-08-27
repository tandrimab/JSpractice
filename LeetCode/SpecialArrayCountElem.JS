var specialArray = function(nums) {
    let n = nums.length;
    nums.sort((a,b) => a - b);
    for(let i = 1; i<=n; i++)  {
        if ((nums[n - i] >= i && nums[n-i-1] < i) ||
        i === n && nums[n-i] >= i) {
            return i;
        }
    } 
    return -1;
};

console.log(specialArray([0,4,3,0,4]));

