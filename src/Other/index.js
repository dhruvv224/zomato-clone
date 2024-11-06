function rev(str) {
    let reversed = ""; // Initialize reversed as an empty string
    let n = str.length;
    for (let i = n - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

const str = 'dhruv';
console.log(rev(str)); // Output: "vurhd"
// decending accending
function decending(arr)
{
    for(let i=-1;i<arr.length-1;i++)
    {
        for(let j=i+1;j<arr.length;j++)
        {
            if(arr[i]<arr[j])
            {
                let tmp=arr[i]
                arr[i]=arr[j]
                arr[j]=tmp
            }
        }
    }
    return arr
}

const arr=[1,5,7,21,1,6,23]
console.log(decending(arr))
