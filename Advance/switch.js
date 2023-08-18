let month = 3;

switch (month){
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("february");
    default:
        console.log("March");
        break;
}

month1 = "march";

switch (month1) {
    case "march":
        console.log("matched");
        break;

    default:
        console.log("Not matched");
        break;
}