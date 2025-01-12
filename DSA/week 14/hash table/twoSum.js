
//Using map 
var twoSum = function(nums, target) {
    let map=new Map()
    console.log(map)
    for (let i=0;i<nums.length;i++){
        if(map.has(target-nums[i])){
            return [map.get(target-nums[i]),i]
        }
        else {
            map.set(nums[i],i)
        }
        console.log(map)
    }
    
};

nums=[8,3,4,4,2,7]
target=9
console.log(twoSum(nums,target))



//Using object
var twoSum = function (nums, target) {
    let pairs = {}
    let output = []
    console.log(pairs)
    for (let i = 0; i < nums.length; i++) {
        if (target - nums[i] in pairs) {
            output.push( pairs[target - nums[i]],i)
            break;
        }
        pairs[nums[i]] = i
        console.log(pairs)
    }
    
    return output;
};

nums=[8,3,4,4,2,7]
target=9
console.log(twoSum(nums,target))
