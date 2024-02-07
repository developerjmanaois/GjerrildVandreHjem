import React, { useEffect } from 'react';
import useRequestData from '../hooks/useRequestData';
import Loader from '../components/Loader';
import Error from '../components/Error';
import { Link } from 'react-router-dom';
import Navbar from '../layout/Navbar';
import Header from '../layout/pageheader/Header';
import MailList from '../components/mailList/MailList';
import Footer from '../layout/Footer';

const Aktiviteter = () => {

  const { data, isLoading, error, makeRequest } = useRequestData();

  useEffect(() => {
    makeRequest("https://api.airtable.com/v0/appdVuqpV8gkE6Oz1/Aktiviteter?filterByFormula=NOT%28%7BName%7D%20%3D%20%27%27%29", 
    "GET", null, {
      'Authorization': "Bearer " + import.meta.env.VITE_APP_AIRTABLEAPIKEY
    });
  }, []);

  const renderImagesWithTitles = () => {
    if (data && data.records && data.records.length > 0) {
      const titles = [
        "Kattegatcentret 15km",
        "Djurssommerland 22km",
        "Nationalpark Mols Bjerge",
        "Skandinavisk Dyrepark 3km",
        "ReePark 34km",
        "GjerrildNordstrand"
      ];

      return data.records.slice(0, 6).map((record, index) => {
        const imageUrl = record.fields.image?.[0]?.url;
        const title = record.fields.Name;
        const link = record.fields.links;
        const destinationRoute = link;
     
        return (

            <Link to={destinationRoute} key={index} className="flex justify-center mb-8">
              <div className="relative w-full h-64 bg-cover bg-center rounded-lg shadow-lg overflow-hidden transition duration-500 ease-in-out transform hover:scale-105" style={{ backgroundImage: `url(${imageUrl})` }}>
              
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center hover:bg-opacity-40 transition duration-500">
                  <p className="text-white font-semibold text-xl transition duration-500 ease-in-out">{title}</p>
                </div>
              </div>
            </Link>
          
          );

        });

      } else {
      return <p>No activities found</p>;
      }
    };

    return (
      <div>
        <div className="px-4 pt-16 max-w-5xl mx-auto">
          <h1 className="text-center text-4xl font-extrabold text-gray-800 mb-4 leading-tight tracking-tight">
          Oplev Djursland
          </h1>

          <p className="text-center text-lg text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            Gjerrild Vandrerhjem er placeret på toppen af Djursland mellem skov og strand og alle de bedste familievenlige aktiviteter indenfor køreafstand.
          </p>

          {
            isLoading ? <Loader /> : error ? <Error /> : 
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {renderImagesWithTitles()}
            </div>
          }
        </div>
      </div>
    );
  }

export default Aktiviteter;
