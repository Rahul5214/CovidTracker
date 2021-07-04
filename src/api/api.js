const url = 'https://api.covid19india.org/data.json';


export const getData = async () => {
    try {
        const res = await fetch(url);
        const { statewise: [{ confirmed, recovered, active, deaths, lastupdatedtime }] } = await res.json();
        return { confirmed, recovered, active, deaths, lastupdatedtime };
    } catch (error) {
        console.log(error);
    }
}