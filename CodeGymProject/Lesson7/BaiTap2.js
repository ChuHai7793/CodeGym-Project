


document.getElementById("submit").addEventListener(
    "click", function() {
        let amountValue = document.getElementById("amount").value;
        let fromCurrency = document.getElementById("fromCurrency").value;
        let toCurrency = document.getElementById("toCurrency").value;

        let outputAmount;

        if (fromCurrency === "VietNam") {
            if (toCurrency === "VietNam") {
                outputAmount = amountValue;

            }else{
                outputAmount = amountValue/25000;

            }
        }else  {
            if(toCurrency === "VietNam") {
                outputAmount = amountValue*25000;
            }else{
                outputAmount = amountValue;
            }
        }

        let unit;
        if (toCurrency === "VietNam") {
            unit = "VND"
        }else{
            unit = "Dollar"
        }
        // console.log(outputAmount)
        document.getElementById("result").innerHTML = `Result: ${outputAmount} ${unit}`;
})