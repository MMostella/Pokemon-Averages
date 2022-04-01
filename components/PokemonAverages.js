export default function PokeAverages(height, weight, firstFetch, secondFetch) {
    let totalCount = firstFetch + secondFetch;
    console.log("Height Average: ", (height / totalCount));
    console.log("Weight Average: ", (weight / totalCount));
    console.log("Pokemon Total: ", totalCount)
}