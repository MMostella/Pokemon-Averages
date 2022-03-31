import axios from "axios";

const HandleErrorData = async (url) => {
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

export default HandleErrorData;