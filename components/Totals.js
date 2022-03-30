const Totals = (array) => {
    let heightTotal = 0;
    let weightTotal = 0;
    let actualCount = 0;
    for (const i in array) {
        const pokemon = array[i];
        if (pokemon != undefined) {
            if (pokemon.height) heightTotal += pokemon.height;
            if (pokemon.weight) weightTotal += pokemon.weight;
            actualCount += 1;
        }
    }
    console.log(heightTotal);
}

export default Totals;