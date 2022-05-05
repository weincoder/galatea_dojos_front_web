console.log('hello world 👾')
type filterFn = (item: string) => boolean;
// The higher-order-function takes an array and a function as arguments
function doSomethingWhatIWant(arr: string[], fn: filterFn): string[] {
    let newArray: string[]= [];
    arr.forEach(item => {
        if (fn(item)) {
            newArray.push(item);
        }
        return newArray;
    })
    return newArray;
};

function checkNameLength(name: string) {
    return name.length >= 18;
}
const lilolaList = ["LiLoLaCamiOne💃🏻", "LiLoLaCamiTwo💃🏻", "LiLoLaCamiThree💃🏻", "LiLoLaCamiFour💃🏻", "LiLoLaCamiTwo💃🏻"]

const output = doSomethingWhatIWant(lilolaList, checkNameLength);
console.log(output);


// ##########################FUNTIONAL##########################################################################
const camiList = ["LiLoLaCamiOne💃🏻", "LiLoLaCamiTwo💃🏻", "LiLoLaCamiThree💃🏻", "LiLoLaCamiFour💃🏻", "LiLoLaCamiTwo💃🏻"]
const lineDesign = (lengthOfLine: number) => console.log(Array(lengthOfLine).join('#'));
let defineMaxLength = (name: string) => name.length >=18;  
const outputCami = camiList.filter(defineMaxLength);
lineDesign(10);
console.log('👩🏽‍💼'+outputCami);
// ###################### Some examples#####
let ageInMonthsList : number[] = [861,926,1000,234,453,1234,123]
// get age in years
let getYearsFromMonths = (months:number) => Math.round(months/12);
let ageInYears = ageInMonthsList.map(getYearsFromMonths);
lineDesign(10);
console.log('🎶'+ ageInYears)
// get younger people
let getYoungPeople = (year:number) => year <= 25;
let youngPeople = ageInYears.filter(getYoungPeople); 
lineDesign(10);
console.log('🕹'+ youngPeople);
// age average
let getAvaregaAges = (listOfAges : number []) => listOfAges.reduce((total, current)=> total +current) /listOfAges.length
console.log(getAvaregaAges(ageInYears));