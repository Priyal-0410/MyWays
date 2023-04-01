function fizzBuzz(pn)
{
  let output = [];
  for(let i=1;i<=pn;i++)
  {
    if(i%3==0 && i%4==0)
    {
      output.push("FizzBuzz");
    }else if (i%3==0)
    {
      output.push("Fizz");
    }
    else if (i%4==0){
      output.push("Buzz");
    }
    else{
      output.push(i.toString());
    }
  }
  return output.join(" ");
}

console.log(fizzBuzz(7+9+7+6+6+7+3+4+1+1));