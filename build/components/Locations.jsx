export default Locations 
import { useEffect, useState, useContext } from "react"
import { Link } from "react-router-dom";
import axios from "axios"
import Data from "./Data";
import { CardContext } from "./CardContext";

function Locations(){
    const {stateParks, changeState} = useContext(CardContext)
    const [selectedState, setSelectedState] = useState("AL");
    const states = ["AL", "AK", "AR", "AS", "AZ", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "IA", "ID", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VA", "VT", "WA", "WI", "WV", "WY"]

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`https://developer.nps.gov/api/v1/parks?stateCode=${selectedState}&q=National%20Park&api_key=puiQ1Y4bYqXMgd2jVQkRCLDELL7282slxAhfV0l6`);
            console.log("API REQUEST")
            changeState(response.data.data || []);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, [selectedState]);

    // useEffect(() => {
    //     setParksData(Data)
    // }, []);
    // console.log(parksData);

    function handleChange(event){
        setSelectedState(event.target.value);
    }

    const post = stateParks.map(item => 
        <div className="locations-post" key={`${item.id}`}>
            <Link to={`/locations/${item.id}`}>
            <h1>{item.fullName}</h1>
            </Link>
            {item.images && item.images.length > 0 && (
                <img className="parkImage" src={item.images[0].url} alt={item.fullName} />)}
        </div>)
    const statesList = states.map(item => <option value={item}>{item}</option>)
    console.log(stateParks);
    return(        
        <>
            <div>
                <h4>Select a State:</h4>
                <select id="dropdown" value={selectedState} onChange={handleChange}>
                    {statesList}
                </select>
            </div>
            <div className="locations">
                {post}
            </div>
        </>
    )
}