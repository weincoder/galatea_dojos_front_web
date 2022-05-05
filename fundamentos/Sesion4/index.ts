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
console.log('👾 imperative'+output);

// ###### FUNCIONAL#######
const dianitaList = ["LiLoLaCamiOne💃🏻", "LiLoLaCamiTwo💃🏻", "LiLoLaCamiThree💃🏻", "LiLoLaCamiFour💃🏻", "LiLoLaCamiTwo💃🏻"]
const maxNameLength = 18;
let defineMaxLength = (name:string) => name.length >= maxNameLength;
let getNames = dianitaList.filter(defineMaxLength);
console.log('declarative🥳'+getNames);
let getNamesV2 = dianitaList.filter((z)=> z.length>18)
// ##### some examples ####
const ageInMonths = [1020,850,234,123,740,520];
// age in years
let getYearsFromMonths = (months: number) => Math.round(months/12);
let ageInYears = ageInMonths.map(getYearsFromMonths);
console.log('🐮' + ageInYears)
// get young people
let getYoungPeople = (age:number) => age <= 25;
let youngPeople = ageInYears.filter(getYoungPeople);
console.log('🕹' + youngPeople)

//  average
const addAges = (totalAges:number, currentAge:number) => currentAge + totalAges;
const getAverageAges = (listOfAges: number[]) => 
            listOfAges.reduce(addAges)/listOfAges.length;

console.log(getAverageAges(ageInYears));