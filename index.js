// IMPORTS
import readline from 'readline';

import { getAllRecords, addRecord, removeLast, getAverage } from './helpers/editrecords.js';

// CONFIGS
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// CODE
const main = () => {
    rl.question('Plays? ', answer => {
        let value = parseInt(answer);
        
        if( isNaN(value) ) { // if its string
            if( answer.match("avg") ) getAverage().then(data=>console.log("Avg: "+data+"\n"));
            else console.log("not a number");
        } else if( value>=0 ) { // normal
            addRecord(value);
        } else if(answer==-1) {
            rl.close();
            return;
        } else if( value == -2 ) {
            removeLast();
        } else if( value == -3 ) {
            getAllRecords().then(console.log);
        }
        
        main();
    })
};

rl.on('close', function () {
    console.log('\nBYE BYE !!!');
    process.exit(0);
});

main();