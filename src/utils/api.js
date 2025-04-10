export const BE_URL = "https://jsonplaceholder.typicode.com/"


export const getData = async (endpoint) => {
    const resp = await fetch(BE_URL + endpoint)
    return resp.json()
}
