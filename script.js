// Write a loop that will iterate through the people array.
// During each loop iteration, check if the current array item is equal to "Phil" or "Lola" using a conditional statement:
// If it is, concatenate the array item to the end of the refused paragraph's textContent, followed by a comma and a space.
// If it isn't, concatenate the array item to the end of the admitted paragraph's textContent, followed by a comma and a space.


const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];
const btn = document.querySelector('button');
const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');

admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

for (const p of people){
    if(p === "Phil" || p === "Lola"){
        refused.textContent += p + ", ";
    } else{
        admitted.textContent += p + ", ";  
    }
}

// Extra bonus question — after completing the above tasks successfully, you will be left with two lists of names, separated by commas, but they will be untidy — there will be a comma at the end of each one. Can you work out how to write lines that slice the last comma off in each case, and add a full stop to the end? Have a look at the Useful string methods article for help.

refused.textContent = refused.textContent.slice(0,refused.textContent.length-2) + '.';
admitted.textContent = admitted.textContent.slice(0,admitted.textContent.length-2) + '.';

