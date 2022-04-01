import axios from "axios";

export default async function HandleErrorData(url) {
    const arrayObj  = {
        heightArray: [],
        weightArray: []
    }
    await axios(url)
    .then(response => {
        arrayObj.heightArray.push(response.data.height);
        arrayObj.weightArray.push(response.data.weight);
    })
    return arrayObj;
}