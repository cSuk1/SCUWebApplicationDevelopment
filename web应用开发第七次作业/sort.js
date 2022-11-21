var A=[56,89,91,20,45,51,23,58,40,32,99];
function QUICKSORT(A,p,r){
    if(p<r){
        var q=PARTITION(A,p,r);
        QUICKSORT(A,p,q-1);
        QUICKSORT(A,q+1,r);
    }
}

function PARTITION(A,p,r){
    var x = A[r];
    var i = p - 1;
    var j=p;
    var temp;
    for(;j<r;j++){
        if(A[j]<=x){
            i=i+1;
            temp = A[i];
            A[i] = A[j];
            A[j] = temp;
        }
    }
    temp = A[i+1];
    A[i+1]=A[r];
    A[r]=temp;
    return i+1;
}
QUICKSORT(A,0,A.length-1);
console.log(A);