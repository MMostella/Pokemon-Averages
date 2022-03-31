const Totals = (array) => {
    let totals = {
        heightTotal: 0,
        weightTotal: 0,
        actualCount: 0
    }
    for (const i in array) {
        const pokemon = array[i];
        if (pokemon != undefined) {
            if (pokemon.height) totals.heightTotal += parseInt(pokemon.height);
            if (pokemon.weight) totals.weightTotal += parseInt(pokemon.weight);
            totals.actualCount += 1;
        }
    }
    return totals;
}

export default Totals;