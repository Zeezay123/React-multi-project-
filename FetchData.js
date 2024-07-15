
export const  FetchData = async (url) => {
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }


    const data = await response.json()

    return data
}



