const convertBtnEl = document.getElementById("convertBtn")
const inputEl = document.getElementById("inputValue")
let output1El = document.getElementById("outputValue1")
let output2El = document.getElementById("outputValue2")
let output3El = document.getElementById("outputValue3")

// Using array:

const data = [
                { result: output1El,
                  heading: "Length(Meter/Feet)",
                    firstUnit: "meters",
                    secondUnit: "feet",                 
                    convert1: 3.281,
                    convert2:3.2808
                },
                {
                    result: output2El,
                    heading: "Volume(Liter/Gallon)",
                    firstUnit: "liters",
                    secondUnit: "gallons",
                    convert1: 0.264172,
                    convert2: 3.7854
                },
                {
                    result: output3El,
                    heading: "Mass(Kilogram/Pound)",
                    firstUnit: "kilograms",
                    secondUnit: "pounds",
                    convert1: 2.20462,
                    convert2: 0.453592
                }
            ]

convertBtnEl.addEventListener("click", function(){
     const input1 = Number(inputEl.value)
    for (let i = 0; i < data.length; i++) {
      const{result, heading, firstUnit, secondUnit,convert1,convert2 } = data[i] 
     
result.textContent = `${heading}\n${input1} ${firstUnit} = ${(input1 * convert1).toFixed(3)} ${secondUnit} |
${input1} ${secondUnit} = ${(input1 * convert2).toFixed(3)} ${firstUnit}`
    }
})

//Using Conventional Mathod:
//convertBtnEl.addEventListener("click", function(){

//let result1 = inputEl.value * 3.281
//let result2 = inputEl.value * 0.3048
//let result3 = inputEl.value * 0.264172
//let result4 = inputEl.value * 3.78541
//let result5 = inputEl.value * 0.2046
//let result6 = inputEl.value * 0.4536

//output1El.textContent=
 //`Length(Meter/Feet)\n${inputEl.value} meters = ${result1.toFixed(3)} feet | ${inputEl.value} feet = ${result2.toFixed(3)} meters`

//output2El.textContent=
 //`Volume(Liter/Gallon)\n${inputEl.value} liters = ${result3.toFixed(3)}gallons | ${inputEl.value}gallons=${result4.toFixed(3)}liters`

//output3El.textContent=
 //`Mass(Kilogram/Pound)\n${inputEl.value} kilograms = ${result5.toFixed(3)} pounds | ${inputEl.value} pounds = ${result6.toFixed(3)} kilograms`    

//})









