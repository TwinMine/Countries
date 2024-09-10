import { useState } from "react";
import "./countries.css"

const url = import.meta.env.VITE_URL;

const Countries = () => {
    const [countries, setCountries] = useState([]);

    async function test() {
        try {
            const response = await fetch(`${url}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json();

            if (response.ok) {
                setCountries(data);
            } else {
                console.log(data.response);
            }
        } catch (error) {
            console.log("Error:", error);
        }
    }

    console.log(countries); 

    return (
        <>
            <button onClick={test}>Click me</button>
            {countries && countries.length > 0 ? (
                countries.map((item, index) => (
                    <div  key={index}>
                    <p className="hidden-text">{item.name.common}</p>
                    <img key={index} src={item.flags.png} alt={`${item.flags.alt.length <= 0 ? item.name.common : item.flags.alt}`} style={{width: "100px"}}/>
                    <p>{item.name.official === "Republic of China (Taiwan)" ? "Taiwan" : item.name.official}</p>
                    </div>
                ))
            ) : (
                <p>No flags found</p> 
            )}
        </>
    );
};

export default Countries;
