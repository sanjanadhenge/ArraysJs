let arr = [1, 0, 2, -1, 5, -7, -2];
for (let i = 0; i < arr.length; i++) 
{
    for (let j = i; j < arr.length; j++)
     {
        for (let k = j; k < arr.length; k++) 
        {
            if(arr[i]+arr[j]+arr[k] == 0)
            {
                console.log(arr[i] +" + "+arr[j] +" + "+arr[k] +" = 0");
            }
        }
    }
}