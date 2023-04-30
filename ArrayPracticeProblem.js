for(let i=0;i<10;i++)
{
    a[i]=Math.floor(Math.random()*999)+100;
}
FindSecondLargest();
FindSecondSmallest();
function FindSecondLargest()
{
    let secondmax=0;
    let max=0;
    for(let i=0;i<10;i++)
    {
       if(a[i]>max)
       {
        secondmax=max;
        max=a[i];
    }
    {
        if(a[i]<max && a[i]>secondmax)
        {
            secondmax=a[i];
        }
    }
    }
    console.log("Second largest number is----->"+secondmax);
}
function FindSecondSmallest()
{
    let secondmin=999;
    let min=999;
    for(let i=0;i<10;i++)
    {
       if(a[i]<min)
       {
        secondmin=min;
        min=a[i];
    }
    {
        if(a[i]!=min && a[i]<secondmin)
        {
            secondmin=a[i];
        }
    }
    }
    console.log("Second smallest number is----->"+secondmin);
}