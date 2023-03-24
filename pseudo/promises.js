// function getUsers() {
//     return [
//       { username: 'john', email: 'john@test.com' },
//       { username: 'jane', email: 'jane@test.com' },
//     ];
//   }


//   function findUser(username) {
//     const users = getUsers();
//     const user = users.find((user) => user.username === username);
//     return user;
//   }
//   console.log(findUser('john'))

// var arr =['anil', 'vishal','abhi']

// arr[0]= "lavkesh"
// console.log(arr)
// const  num = 20
// num = 30
// console.log(num)

// var str ="masai"
// var {length} = str
// console.log(length)


var arr =['a','b','c','d','e']
const func = ([f,...r])=>r.reduce((a,c)=>a+c)+f
console.log(func(arr)) 