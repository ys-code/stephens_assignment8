//STEP 1
/*
let movies=['Eternal Sunshine of the Spotless Mind','Lost in Translation','Spirited Away','My Octopus Teacher','The Hobbit'];
console.log(movies[1]);
*/


//STEP 2
/*
let movies=new Array(5);
movies[0]='Eternal Sunshine of the Spotless Mind';
movies[1]='Lost in Translation';
movies[2]='Spirited Away';
movies[3]='My Octopus Teacher';
movies[4]='The Hobbit';
console.log(movies.shift());
*/

//STEP 3
/*
let movies=new Array(5);
movies[0]='Eternal Sunshine of the Spotless Mind';
movies[1]='Lost in Translation';
movies[2]='Spirited Away';
movies[3]='My Octopus Teacher';
movies[4]='The Hobbit';
movies.splice(2,0,'Sherlock Holmes ')
console.log(movies.length);
*/


//STEP 4
/*
let movies=['Eternal Sunshine of the Spotless Mind','Lost in Translation','Spirited Away','My Octopus Teacher','The Hobbit'];
movies.shift();
console.log(movies);
*/


//STEP 5
/*
let movies=['Eternal Sunshine of the Spotless Mind','Lost in Translation','Spirited Away',
'My Octopus Teacher','The Hobbit','Kung Fu Panda','Star Wars'];
for (let movie in movies){
    if(movies.hasOwnProperty(movie)){
        console.log(movies[movie]);}
}
*/


//STEP 6
/*
let movies=['Eternal Sunshine of the Spotless Mind','Lost in Translation','Spirited Away',
'My Octopus Teacher','The Hobbit','Kung Fu Panda','Star Wars'];
for (let movie of movies){
        console.log(movie);
}
*/


//STEP 7
/*
let movies=['Eternal Sunshine of the Spotless Mind','Lost in Translation','Spirited Away',
'My Octopus Teacher','The Hobbit','Kung Fu Panda','Star Wars'];
movies.sort();
for (let movie of movies){
        console.log(movie);
}
*/


//STEP 8
/*
let movies=['Eternal Sunshine of the Spotless Mind','Lost in Translation','Spirited Away',
'My Octopus Teacher','The Hobbit','Kung Fu Panda','Star Wars'];
let leastFavMovies=['Dumb and Dumber To','Transformers 2','Scary Movie']
console.log('Movies I like:\n\n');
let prefix='Movie';
let num=1,num2=1;
for (let movie in movies){
    if(movies.hasOwnProperty(movie)){
        console.log(`${prefix} ${num} ${movies[movie]}`);
        num +=1;}    
    }
console.log('\nMovies I regret watching:\n\n')
for (let leastFav in leastFavMovies){
    if(leastFavMovies.hasOwnProperty(leastFav)){
        console.log(`${prefix} ${num2} ${leastFavMovies[leastFav]}`);
        num2 +=1;}
    }
*/


//STEP 9
/*
let favMovies=['Eternal Sunshine of the Spotless Mind','Lost in Translation','Spirited Away',
'My Octopus Teacher','The Hobbit','Kung Fu Panda','Star Wars'];
let leastFavMovies=['Dumb and Dumber To','Transformers 2','Scary Movie']
let movies=favMovies.concat(leastFavMovies);
movies.sort().reverse();
for(let film in movies ){
    if(movies.hasOwnProperty(film)){
        console.log(movies[film]);
    }
}
*/


//STEP 10
/*
let favMovies=['Eternal Sunshine of the Spotless Mind','Lost in Translation','Spirited Away',
'My Octopus Teacher','The Hobbit','Kung Fu Panda','Star Wars'];
let leastFavMovies=['Dumb and Dumber To','Transformers 2','Scary Movie']
let movies=favMovies.concat(leastFavMovies);
movies.sort().reverse();
console.log(movies[(movies.length)-1]);
*/


//STEP 11
/*
let favMovies=['Eternal Sunshine of the Spotless Mind','Lost in Translation','Spirited Away',
'My Octopus Teacher','The Hobbit','Kung Fu Panda','Star Wars'];
let leastFavMovies=['Dumb and Dumber To','Transformers 2','Scary Movie']
let movies=favMovies.concat(leastFavMovies);
movies.sort().reverse();
let firstMovie=movies.shift();
console.log(firstMovie);
*/


//STEP 12
/*
let favMovies=['Eternal Sunshine of the Spotless Mind','Lost in Translation','Spirited Away',
'My Octopus Teacher','The Hobbit','Kung Fu Panda','Star Wars'];
let leastFavMovies=['Dumb and Dumber To','Transformers 2','Scary Movie']
let movies=favMovies.concat(leastFavMovies);
movies.sort().reverse();
let newList=movies.filter(myFunction);
function myFunction(value, index){
    if (value==='Dumb and Dumber To'|| value==='Transformers 2'||value==='Scary Movie'){
        return index;
    }
}console.log(newList);
*/


//STEP 13
/*
movies = [["Movie 1", 1], ["Movie 2", 2], ["Movie 3", 3], ["Movie 4", 4], ["Movie 5", 5]];
let a = movies.filter(myFunction)
function myFunction(item){
    console.log(item[0]);    
};
*/


//STEP 14
/*
let employees=['ZAK','JESSICA','MARK','FRED','SALLY'];
let show = function(item) {
    item.forEach(element => {
        console.log(element);
    });};
console.log('Employees:\n\n');
show(employees);
*/


//STEP 15
/*
function filterVAlues(arrayData){
    return filtered=arrayData.filter(function(value){
        return (!value===false || !value===null || !value===0 || !value==='');
    });}
  console.log
  (filterVAlues([58, '', 'abcd', true, null, false, 0]));
*/


//STEP 16
/*
function getItem(arraySet){
    let max=(arraySet.length)-1;
    let indexNum=getRandomInt(min,max);
    console.log(indexNum);
    console.log(arraySet[indexNum]);
}
function getRandomInt(0, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let testData=[34,-78,2,12,45,87,56,88,100,67,99,23];
getItem(testData);
*/


//STEP 17
/*
function largestNum(inputArray){
    let num=0;
    inputArray.forEach((value =>{
        if (value>num){num=value;}
    }));
    return num;
}
let testData=[34,-78,2,12,45,87,56];
console.log(largestNum(testData));
*/