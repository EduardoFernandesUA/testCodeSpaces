import fs from 'fs';

const getAllRecords = () => new Promise((resolve, reject) => {
    try {
        resolve( fs.readFileSync('./records.txt', { encoding: 'utf8' }).split('\n') );
    } catch ( err ) {
        reject( err );
    }
});

const addRecord = (value) => new Promise((resolve, reject) => {
    try {
        const currFile = fs.readFileSync('./records.txt', { encoding: 'utf8' }).trim();
        fs.writeFileSync('./records.txt', currFile+"\n"+value, { encoding: 'utf8' } );
        resolve();
    } catch ( err ) {
        reject( err );
    }
})

const removeLast = () => new Promise((resolve, reject) => {
    try {
        const currFile = fs.readFileSync('./records.txt', { encoding: 'utf8' }).trim();
        fs.writeFileSync('./records.txt', currFile.split('\n').slice(0,-1).join('\n'), { encoding: 'utf8' } );
        resolve();
    } catch ( err ) {
        reject( err );
    }
})

const getAverage = () => new Promise( async (resolve, reject) => {
    try {
        const allRecords = await getAllRecords();
        resolve( allRecords.reduce( (acc, el)=>acc+parseInt(el), 0) / allRecords.length );
    } catch ( err ) {
        reject( err );
    }
})

export { getAllRecords, addRecord, removeLast, getAverage }
// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('foo');
//     }, 300);
//   });
  
// myPromise
//   .then(value => { return value + ' and bar'; })
//   .then(value => { return value + ' and bar again'; })
//   .then(value => { return value + ' and again'; })
//   .then(value => { return value + ' and again'; })
//   .then(value => { console.log(value) })
//   .catch(err => { console.log(err) });