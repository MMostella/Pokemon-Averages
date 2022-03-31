import axios from "axios"

const GetData = async (pokemon) => {
    let url = pokemon.url
    let heightArray = [];
    let weightArray = [];
    await axios(url)
    .then(response => {
        heightArray.push(response.data.height);
        weightArray.push(response.data.weight);
    })
    return [ heightArray, weightArray ];
}

export default GetData;