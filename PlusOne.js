
var plusOne = function(digits) {
    for (var i = digits.length - 1; i >= 0; i--) {
    	if (digits[i]!==9) {
    		digits[i]+=1
    		return digits
    	}else{
    		digits[i]=0
    	}
    }
    return [1,...digits]
};

let digits = [4,3,2,1]

console.log(plusOne(digits))