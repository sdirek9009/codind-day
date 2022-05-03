function weekNumbersToWords (myDay){

    let i  = myDay.length;
    weekDays = [];

    do{
        switch(myDay[i]){
            case 1:
                weekDays.push('Monday')
                break;
            case 2:
                weekDays.push('Tuesday')
                break;
            case 3:
                weekDays.push('Wednesday')
                break;
            case 4:
                weekDays.push('Thursday')
                break;
            case 5:
                weekDays.push('Friday')
                break;
            case 6:
                weekDays.push('Saturday')
                break;  
            case 7:
                weekDays.push('Sunday')
                break;              
        }

        i-=1;

    }   while(i>=0)
            weekDays.reverse();
            console.log(weekDays.toString())
}

weekNumbersToWords([3,6,2,5,7,1,4]);