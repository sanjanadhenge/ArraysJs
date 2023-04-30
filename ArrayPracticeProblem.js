let a=[];
let rem=0;
let k=0;
let temp=0;
for(let i=11;i<100;i++)
{
    temp=i;
        rem=(temp%10);
        temp=Math.floor(temp/10);
        if(temp == rem)
        {
           
            a[k]=temp;
            k++;
        }
    
}
for(let i=0;i<a.length;i++)
{
    console.log(a[i]);
}