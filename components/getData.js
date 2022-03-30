import axios from "axios"

const GetData = async (pokemon) => {
    let url = pokemon.url
    let average = {
        height: [],
        weight: []
    };
    await axios(url)
    .then(response => {
        // console.log(response.data)
        average.height.push(response.data.height);
        average.weight.push(response.data.weight);
    })
    return average
}

export default GetData;