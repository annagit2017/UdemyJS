const getLocation = () => {
    return fetch ('https://ipinfo.io/json?token=0741207e24a485').then((response)=> {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error(`${response.status}`)
        }
    }).then((data) => {
        return data;
    });
};

getLocation().then((obj) =>
console.log(`${obj.country}`)
).catch((err)=>{`${err}`});
