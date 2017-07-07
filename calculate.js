function calculate(data){
    if (data.currency == "RUB") {
        if (data.increasedRate) {
            if (data.duration<6) {
                var yearlyPercent = 0.055
            } else if(data.duration<12) {
                var yearlyPercent = 0.07
            } else if(data.duration==12){
                var yearlyPercent = 0.08
            } else {
                var yearlyPercent = 0.08
            }
        } else {
            if (data.duration<6) {
                var yearlyPercent = 0.05
            } else if(data.duration<12) {
                var yearlyPercent = 0.06
            } else if(data.duration==12){
                var yearlyPercent = 0.07
            } else {
                var yearlyPercent = 0.065
            }
        }
    } if (data.currency == "USD") {
        if (data.increasedRate) {
            if (data.duration<6) {
                var yearlyPercent = 0.002
            } else if(data.duration<12) {
                var yearlyPercent = 0.01
            } else if(data.duration==12){
                var yearlyPercent = 0.015
            } else {
                var yearlyPercent = 0.015
            }
        } else {
            if (data.duration<6) {
                var yearlyPercent = 0.001
            } else if(data.duration<12) {
                var yearlyPercent = 0.005
            } else if(data.duration==12){
                var yearlyPercent = 0.01
            } else {
                var yearlyPercent = 0.01
            }
        }
    } if (data.currency == "EUR") {
        if (data.increasedRate) {
            if (data.duration<6) {
                var yearlyPercent = 0.002
            } else if(data.duration<12) {
                var yearlyPercent = 0.002
            } else if(data.duration==12){
                var yearlyPercent = 0.004
            } else {
                var yearlyPercent = 0.004
            }
        } else {
            if (data.duration<6) {
                var yearlyPercent = 0.001
            } else if(data.duration<12) {
                var yearlyPercent = 0.001
            } else if(data.duration==12){
                var yearlyPercent = 0.003
            } else {
                var yearlyPercent = 0.003
            }
        }
    }


    var monthlyPercent = yearlyPercent/12;

    var amount = data.amount;

    if (data.bonus) {
        amount = amount + amount* 0.005
    }

    if (data.capitalization) {
        a = amount;
        for (i = 0; i < data.duration; i++) {
            a = a + a*monthlyPercent;
        }
        var profit = a - amount;
    } else {
        var profit = amount * data.duration * monthlyPercent;

    }
    profit = Math.round(profit);
    return {
        money: amount + profit,
        percent: yearlyPercent,
        profit: profit
    }
};
if (typeof module != "undefined") {
    module.exports=calculate
}
