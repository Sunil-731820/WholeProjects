switch(new Date().getDay()){
    case 0:
        console.log("Today is Sunday");
        break;
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is TuesDay");
        break;
    case 3:
        console.log("Today is WedNesday");
        break;
    case 4:
        console.log("Today is ThursDay");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6:
        console.log("today is Saturday");
        break;
    default:
        console.log("InValid choice");
        break;
}

// The Another Example of the 

switch(new Date().getDay()){
    case 4:
    case 5:
        let text = "Soon it is weekend";
        console.log(text);
        break;
    case 0:
    case 6:
        let text1 = "It is Weekend";
        console.log(text1);
    default:
        console.log("Looking forward for the weekend");
        break;
}

// The Another Example is 

let x = 010;
switch(x){
    case 0:
        let text = "Off";
        console.log(text);
        break;
    case 1:
        let text1 = "On";
        console.log(text1);
        break;
    default:
        let text11 = "no value Found choose valid ";
        console.log(text11);
}