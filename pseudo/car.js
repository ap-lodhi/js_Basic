var Hatchback = {
    BS: ['Basic Servicing', 2000],
    EF: ['Engine Fixing', 5000],
    CF: ['Clutch Fixing', 2000],
    BF: ['Brake Fixing', 1000],
    GF: ['Gear Fixing', 3000]
}
var Sedan = {
    BS: ['Basic Servicing', 4000],
    EF: ['Engine Fixing', 8000],
    CF: ['Clutch Fixing', 4000],
    BF: ['Brake Fixing', 1500],
    GF: ['Gear Fixing', 6000]
}
var SUV = {
    BS: ['Basic Servicing', 5000],
    EF: ['Engine Fixing', 10000],
    CF: ['Clutch Fixing', 6000],
    BF: ['Brake Fixing', 2500],
    GF: ['Gear Fixing', 8000]
}






function carServices(typeOfCar, serviceCode){
    var ans = '';
    var total = 0;
    if(typeOfCar == 'Hatchback'){
        for(var i=0; i<serviceCode.length; i++){
            var str = serviceCode[i][0] + serviceCode[i][1];
            var arr = Hatchback[str];
            console.log(arr, str, Hatchback[str])
            ans += `Charges for ${arr[0]} - ₹ ${arr[1]}` + '\n'; 
            total += arr[1];
        }
    }
    else if(typeOfCar == 'Sedan'){
        for(var i=0; i<serviceCode.length; i++){
            var str = serviceCode[i][0] + serviceCode[i][1];
            var arr = Sedan[str];
            console.log(arr, str, typeOfCar[str])
            ans += `Charges for ${arr[0]} - ₹ ${arr[1]}` + '\n'; 
            total += arr[1];
        }
    }else{
        for(var i=0; i<serviceCode.length; i++){
            var str = serviceCode[i][0] + serviceCode[i][1];
            var arr = SUV[str];
            console.log(arr, str, typeOfCar[str])
            ans += `Charges for ${arr[0]} - ₹ ${arr[1]}` + '\n'; 
            total += arr[i][1];
        }
    }
    
    if(total > 9999){
        ans += `Charges for complimentary cleaning - free` + '\n';
        ans += `Total Bill – ₹ ${total}`;
    }else{
        ans += `Total Bill – ₹ ${total}`;
    }
    console.log(ans);
}



carServices('Hatchback', ['BS01', 'EF01']);