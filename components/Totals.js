const Totals = (array) => {
    let totals = {
        heightTotal: 0,
        weightTotal: 0,
        first: 0,
        second: 0
    }
    for (const i in array) {
        const pokemon = array[i];
        if (pokemon != undefined) {
            if (pokemon.height) totals.heightTotal += parseInt(pokemon.height);
            if (pokemon.weight) totals.weightTotal += parseInt(pokemon.weight);
            if (pokemon.first) totals.first += parseInt(pokemon.first);
            if (pokemon.second) totals.second += parseInt(pokemon.second);
        }
    
    }
    return totals;
}

export default Totals;