let n=15;
arr=[];
let k=0;
for (let i = 2; i <=n; i++) {
  if(n % i == 0)
  {
    CheckPrime(i);
  }
}

function CheckPrime(a)
{
    let flag =0;
    
    for(let i = 2; i < a/2; i++ )
    {
        if(a%i ==0)
        {
            flag=1;
            break;
        }
        else
        {
            flag=0;
           
        }
       
    }
    if(flag == 0)
    {
        arr[k]=a;
        k++;
    }
}
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}