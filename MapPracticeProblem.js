let  myMap = new Map();
let arr=[];
let count1=0,count2=0,count3=0,count4=0,count5=0,count6=0;
let i=0;
    while(1)
    {
          a=Math.floor(Math.random()*6)+1;
          arr[i]=a;
          if(arr[i]==4)
          {
             count4++;
          }
          if(arr[i]==1)
          {
              count1++;
          }
          if(arr[i]==2)
          {
              count2++;
          }
          if(arr[i]==3)
          {
              count3++;
          }
          if(arr[i]==5)
          {
              count5++;
          }
          if(arr[i]==6)
          {
              count6++;
          }
          i++;
          if(count4 == 10)
          {
            break;
          }
    }
      
   myMap.set(1,arr);

console.log(myMap);
if(count1>count2 && count1>count3 && count1>count4 && count1>count5 && count1>count6)
{
    console.log(" 1 has reached maximum times");
}
if(count2>count1 && count2>count3 && count2>count4 && count2>count5 && count2>count6)
{
    console.log(" 2 has reached maximum times");
}
if(count3>count1 && count3>count2 && count3>count4 && count3>count5 && count3>count6)
{
    console.log(" 3 has reached maximum times");
}
if(count4>count1 && count4>count2 && count4>count3 && count4>count5 && count4>count6)
{
    console.log(" 4 has reached maximum times");
}
if(count5>count1 && count5>count2 && count5>count3 && count5>count4 && count5>count6)
{
    console.log(" 5 has reached maximum times");
}
if(count6>count1 && count6>count2 && count6>count3 && count6>count4 && count6>count5)
{
    console.log(" 6 has reached maximum times");
}
if(count1<count2 && count1<count3 && count1<count4 && count1<count5 && count1<count6)
{
    console.log(" 1 has reached minimum times");
}
if(count2<count1 && count2<count3 && count2<count4 && count2<count5 && count2<count6)
{
    console.log(" 2 has reached minimum times");
}
if(count3<count1 && count3<count2 && count3<count4 && count3<count5 && count3<count6)
{
    console.log(" 3 has reached minimum times");
}
if(count4<count1 && count4<count2 && count4<count3 && count4<count5 && count4<count6)
{
    console.log(" 4 has reached minimum times");
}
if(count5<count1 && count5<count2 && count5<count3 && count5<count4 && count5<count6)
{
    console.log(" 5 has reached minimum times");
}
if(count6<count1 && count6<count2 && count6<count3 && count6<count4 && count6<count5)
{
    console.log(" 6 has reached minimum times");
}