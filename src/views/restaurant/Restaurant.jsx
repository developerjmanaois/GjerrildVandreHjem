import React, { useEffect, useState } from 'react';
import useRequestData from '../../hooks/useRequestData';
import Loader from '../../components/Loader';
import Error from '../../components/Error';
import './restaurant.css';

const Restaurant = () => {
    const { data, isLoading, error, makeRequest } = useRequestData();
    const [records, setRecords] = useState([]);

    const { data: foodData, isLoading: foodLoading, error: foodError, makeRequest: foodMakeRequest } = useRequestData();

    useEffect(() => {
        makeRequest("https://api.airtable.com/v0/appdVuqpV8gkE6Oz1/restaurant", "GET", null, {
          'Authorization': "Bearer " + import.meta.env.VITE_APP_AIRTABLEAPIKEY
        });
    }, []);

    useEffect(() => {
        foodMakeRequest("https://api.airtable.com/v0/appdVuqpV8gkE6Oz1/food?filterByFormula=Id", "GET", null, {
          'Authorization': "Bearer " + import.meta.env.VITE_APP_AIRTABLEAPIKEY
        });
    }, []);

    useEffect(() => {
        if (data && data.records) {
            setRecords(data.records);
        }
    }, [data]);

    return (
        <div className="restaurant-container">
            {isLoading && <Loader />}
            {error && <Error message="Error fetching data..." />}
            
            {records.map((r) => (
                <div key={r.id} className="restaurant-card">
                    <h2 className="restaurant-title">{r.fields.Title}</h2>
                    <p className="restaurant-description">{r.fields.Description}</p>

                    {foodLoading ? (
                        <Loader />
                    ) : (
                        <div className="food-grid">
                            {foodData && foodData.records && foodData.records.map((food) => (
                                <div key={food.id} className="food-item">
                                    <img src={food.fields.image[0].url} alt={food.fields.Name} className="food-image" />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Restaurant;
