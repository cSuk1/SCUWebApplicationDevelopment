
var nameList = ['adam', 'LISA', 'barT'];
var uname;
var firstCh;
var reCh;
for(num in nameList){
    uname = nameList[num];
    firstCh = uname.slice(0, 1);
    reCh = uname.slice(1);
    firstCh = firstCh.toUpperCase();
    reCh = reCh.toLowerCase();
    uname = firstCh + reCh;
    nameList[num] = uname;
}
console.log(nameList);