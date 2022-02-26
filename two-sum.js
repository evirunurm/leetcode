var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++)
            if ( parseInt(nums[i]) + parseInt(nums[j]) == target && nums.indexOf(nums[i], i) != nums.indexOf(nums[j], j) ){
                return [nums.indexOf(nums[i], i), nums.indexOf(nums[j], j)]
            }
    }
};