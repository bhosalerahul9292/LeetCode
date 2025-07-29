
var searchInsert = function(nums, target) {
    let low=0;
    let high=nums.length-1
    while(low<=high) {
    	let mid = low+Math.floor((high-low)/2)
    	if (nums[mid]==target) {
    		return mid
    	}else if(nums[mid]>target) {
    		high=mid-1
    	}else{
    		low=mid+1
    	}
    }
    return low
};

let nums = [1,3,5,6]
let target=2

console.log(searchInsert(nums,target))
