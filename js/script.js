const box = document.querySelector('.box');

function boxFizzbuzz(boxes) {
    const cella = document.createElement('div');
    cella.className = 'quadrati';
    boxes.append(cella);
}

for (let z = 1; z <= 100; z++) {
    boxFizzbuzz(box);

    if (z % 3 === 0 && z % 5 === 0){
        console.log('fizzbuzz');
    } else if (z % 3 === 0) {
        console.log('fizz');
    } else if (z % 5 === 0){
        console.log('buzz');
    } else {
        console.log(z);
    }
};





    




