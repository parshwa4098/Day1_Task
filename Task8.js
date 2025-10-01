// Flatten a given array

// Example - [1,2,[5,4],3,[5],[93,8,2]]

// Output - [1,2,5,4,3,5,93,8,2]

// without an inbuilt functions
let arr=[1,2,[5,4],3,[5],[93,8,2]]
let result=[]
for(let i=0;i<arr.length;i++){
    if(Array.isArray(arr[i])){
        for(let j=0;j<arr[i].length;j++){
            result.push(arr[i][j])
        }
    }
    else{
        result.push(arr[i])
    }
}
console.log(result)
