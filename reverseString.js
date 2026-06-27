let name="dad";
let reverse=""

for(let i=name.length-1;i>=0;i--)
{
    reverse+=""+name[i];
}

console.log(reverse);

if(name==reverse)
{
    console.log("palindrome sentence")

}
else
{
    console.log("not a palindrome")
}