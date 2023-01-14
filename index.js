// console.log("Dhiraj");
// console.log("hello World");
// // console.log("This is web page");

// function fun(a,b){

//     console.log(a, " ",b);
//      return "return value";
// }

//  fun(10,20);
// let val=fun("Dhiraj",21);
// console.log(val);

const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };


  function getvalue(record,id,prop){

console.log(record[id][prop]);

  }

  getvalue(recordCollection,2548,"artist");
  getvalue(recordCollection,2548,"tracks");
  getvalue(recordCollection,1245,"artist");