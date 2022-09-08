function mydisplay(some){
    console.log("The Message is "+ some);
}

let myPromise = new Promise(function(myResolve,MyReject){
    let x =0;
    if(x==1){
        myResolve("OK");
    }else{
        MyReject("Error");
    }
});

myPromise.then(
    function(value){
        mydisplay(value);
    },

    function(value){
        mydisplay(value);
    }
)