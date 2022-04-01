export default function Totals(array) {
    let totals = {
        heightTotal: 0,
        weightTotal: 0,
        firstFetch: 0,
        secondFetch: 0
    }
    for (const i in array) {
        const pokemon = array[i];
        if (pokemon != undefined) {
            if (pokemon.height) totals.heightTotal += parseInt(pokemon.height);
            if (pokemon.weight) totals.weightTotal += parseInt(pokemon.weight);
            if (pokemon.firstFetch) totals.firstFetch += parseInt(pokemon.firstFetch);
            if (pokemon.secondFetch) totals.secondFetch += parseInt(pokemon.secondFetch);
        }
    
    }
    return totals;
}