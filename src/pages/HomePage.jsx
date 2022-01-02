import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import List from '../components/List';
import Card from '../components/Card';
import Controls from '../components/Controls';
import { ALL_COUNTRIES } from '../config';

const HomePage = ({countries, setCountries}) => {
   const [filtredCountries, setFiltredCountries] = useState(countries);

   const navigate = useNavigate();

   const handleSearch = (search, region) => {
      let data = [...countries];

      if (region) {
         data = data.filter( (c) => c.region.includes(region))
      }

      if (search) {
         data = data.filter( (c) => c.name.toLowerCase().includes(search.toLowerCase()))
      }

      setFiltredCountries(data)
   }
   useEffect( () => {
      if (!countries.lenght)
         axios.get(ALL_COUNTRIES).then(({data}) => setCountries(data));
         // eslint-disable-next-line
   }, []);

   useEffect( () => {
      handleSearch();
      // eslint-disable-next-line
   }, [countries]);
   return (
      <>
         <Controls onSearch={handleSearch} />
         <List>
            {filtredCountries.map( (c) => {
               const countryInfo = {
                  img: c.flags.png,
                  name: c.name,
                  info: [
                     {
                        title: 'Capital',
                        description: c.capital,
                     },
                     {
                        title: 'Population',
                        description: c.population.toLocaleString(),
                     },
                     {
                        title: 'Region',
                        description: c.region,
                     },
                  ],
               };
               return <Card key={c.name} onClick={ () => navigate(`/country/${c.name}`)} {...countryInfo} />
            })}
         </List>
      </>
   );
};

export default HomePage;