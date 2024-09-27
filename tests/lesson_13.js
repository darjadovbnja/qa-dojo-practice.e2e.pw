function MaxFinder(){
    return {
        findMax: function(n,m){
            if (n>m){
                return n
            }
            else {
                return m
            }
        }
    }
}

const maxValue = MaxFinder();
console.log(maxValue.findMax(3,5));
console.log(maxValue.findMax(6,6));

function upToTopValue(){
    return {
        listToTopValue: function(topValue){
            let result = [];
            let i = 1;
            while (i<=topValue){
                result.push(i);
                i++;
            }
            return result
        }
    }
}

const toTopValue = upToTopValue();
console.log(toTopValue.listToTopValue(123));

function calculateSum(){
    return {
        sumCalculation: function(maxValue){
            let sum = 0;
            for (let x = 0; x<=maxValue; x++) {
                sum+=x;
            }
        return sum;
        }
    }
}

const sumResult = calculateSum();
console.log(sumResult.sumCalculation(4));
