console.log(`Hello world from JS`);
// function: clone (thay doi vung nho khi gan bien)
let website = {website: 'mikitran.com',age:10};
let newwebsite = _.clone(website);
newwebsite.age = 20;
console.log(`>>> value of website: `,website, `, value of newwebsite: `,newwebsite);

// function: merge (gop nhieu object lam mot)
let firstObject = {'A':[{'B':1},{'C':2}]};
let secondObject = {'B':[{'B':4},{'D':4}]};
let rs5 = _.merge(firstObject,secondObject);
console.log(`>>> value of merge: `,rs5);

// function: debounce (tuong tu ham setTimeout cua JS)
let debounced = _.debounce(()=>{
    console.log(`Debounced after 4000ms`);
},4000);
window.addEventListener('resize',debounced);

// function: throttle: tuong tu ham setInterval cua JS
let throttled = _.throttle(()=>{
    console.log('Throttled after 50ms');
},50);
window.addEventListener('resize',throttled);


//function: isEmpty (tranh loi crash ko dang co; kiem tra objec, collection,map,set co bi empty ko)
let a1 = {};
let a2 = {name:'Miki Tran'};
let a3 = [];
console.log(`a1= `,_.isEmpty(a1),`, a2 = `, _.isEmpty(a2),`, a3= `,_.isEmpty(a3));

// Tao arr gom item ko co trong arr1
let rs4 = _.difference([1,3,4,6,9,20,19],[1,2,5,9,8,3]);
console.log(`function-difference: `,rs4);

// function: take (clone 1 arr dc trich xuat tu 1 arr)
let arr3 = [1,2,3,5,6,8];
let result3 = _.take(arr3,2); //clone 2 value
console.log (`>>Result3 = `,result3);

// function: flatten (lam phang arr co nhieu sub.arr trong no)
let arr2 = [1,[2,[3,[4]],5]];
let result2 = _.flatten(arr2);
console.log(result2);
//cach 2: chuyen ve mang 1 chieu du co n sub.arr
let result2a=_.flattenDeep(arr2);
console.log(result2a);

//function: chunk (cat 1 arr thanh nhieu arr con)
let arr1 = [1,2,3,4];
let result1 = _.chunk(arr1,2);
console.log(result1);

//function: orderBy
let items=[
    {name:'Item A',price:20},
    {name:'Item B',price:8},
    {name:'Item C',price:5},
    {name:'Item D',price:4},
    {name:'Item E',price:90},
];
let resutl = _.orderBy(items,['price'],['asc']);
console.log(resutl);