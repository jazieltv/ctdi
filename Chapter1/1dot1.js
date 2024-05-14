//Implement an alogirth to determine if a string has all uniqe characters

//what i want to do is in this tep process:
//-identify the string
//-get the function that breaks the string into an individual characters "abcd" -> ["a", "b" "c", "d"]
//-then create an algo that runs through and checks the characters---step method i think?
//should give you the answer

// string = "hi my name is jaziel"

function isUnique(string) {
    const obj = {};
    console.log(obj)
    for( let i of string)
    (!obj[i])?obj[i]=1:obj[i]++;
    console.log(obj)
for ( let i in obj)
{
    if(obj[i]>1)
        return false;
}
return true
}

console.log(isUnique("my name is uo"))

//one problem im fidning is that it is counting spaces in this string and therefore if it does have sopcaes it is returning
//it as false even though the characters themselves are unique

//possible solutionms are for it to exclude the character " " in the count somehow