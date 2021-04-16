const fetch = require('node-fetch');
const fs = require('fs');
const moveFile = require('move-file');
let url= 'https://jsonplaceholder.typicode.com/posts'


fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        fs.writeFile('post.json', JSON.stringify(data, null, 2), (err) => {
        if (err) throw err;
        console.log('Data written to file');
});
(async () => {
    await moveFile('post.json', 'result/post.json');
    console.log('The file has been moved');
})();
console.log('This is after the write call');
}).catch(err => console.log(err))


