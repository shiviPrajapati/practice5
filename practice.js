// Q.1  Promisify appendFile function
const fs = require('fs')
function test(){
    return new Promise((res,rej) => {
        fs.appendFile('./sample.txt', 'file appended' , function(err) {
            if(err){
                rej(err)
            }
            res()
        })
    })
}

test().then((res) => {
    console.log("file appened")
}).catch((err) => console.log("error"))



// Q2 
// function A = () => Promise.resolve({})
// function B = () => Promise.resolve({})

// Call A and B together.


const A = () => Promise.resolve({})
const B = () => Promise.resolve({})



Promise.all([A(), B()]).then(() => {console.log("promise resolved")})
.catch((rej) => {console.log("Any promise rejected")})