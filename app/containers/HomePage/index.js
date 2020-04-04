/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useEffect, useState, Fragment, useRef } from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { getHotelsList } from './api';
import PageSection from 'components/PageSection';
import Loader from 'react-loader-spinner';
import { RightSection, LeftSection } from './styledComponents';
import Filters from 'components/Filters';
import { constructStringMultiSearch, constructStringSingleSearch } from './utils';

const initialFilterState = {name: '', city: '', price: {min: 70, max: 150}, date: [new Date('10-09-2020'), new Date('10-10-2020')]};

export default function HomePage() {

  const [hotelsList, setHotelsList] = useState([]);
  const [loaderState, setLoaderState] = useState(false);
  const [searchType, setSearchType] = useState('');
  const [filterState, setFilterState] = useState(initialFilterState);
  const selectElem = useRef(null);

  useEffect(() => {
    if(typeof M !== 'undefined') M.FormSelect.init(selectElem.current);
    getHotels();
  }, []);

  const handleFilterChange = (e) => setFilterState({...filterState, [e.target.name]: e.target.value});
  
  
  const getHotels = (filters = '') => {
    setLoaderState(true);
    getHotelsList(filters).then(result => {
      const res = result.data;
      if(res.status.code === 0){
        setHotelsList(res.data);
        setLoaderState(false);
      }
    }).catch(err => {
      setLoaderState(false);
      M.toast({html: "Something went wrong"});
    });
  }

  const searchResults = () => {
    searchType === 'all' ?
      getHotels(constructStringMultiSearch(filterState)) : getHotels(constructStringSingleSearch(filterState, searchType));
  }

  const resetFilters = () => {
    getHotels();
  }

  const onHandleSort = e => {
    
  }

  return (
    <Fragment>
      <div className="row">
        <div className="s6">
        <h2 className="teal-text">
          <FormattedMessage {...messages.header} />
        </h2>
        </div>
        <div className="s6">
            <label>Sort</label>
          <select
            className="browser-default"
            onChange={e => getHotels(`?sort=${e.target.value}`)}
            name="sort"
          >
            <option value="" disabled>Choose your option</option>
            <option value="name">Name</option>
            <option value="price">Price</option>
          </select>
        </div>
      </div>
      {loaderState && (
        <Loader
            type="Circles"
            color="#26a69a"
            height={100}
            width={100}
            className="my-loader"
        />
      )}
      <div className="divider"></div>
      <PageSection>
        <div className="row">
          <LeftSection className="col s3">
            <h4 className="teal-text">Filters</h4>
            <div className="row">
              <select
                  ref={selectElem}
                  onChange={e => setSearchType(e.target.value)}
                  name="category"
                  class="search-select"
              >
                  <option value="" disabled selected>Search By</option>
                  <option value="name">Name</option>
                  <option value="city">City</option>
                  <option value="price">Price</option>
                  <option value="date">Availibility</option>
                  <option value="all">Multi Search</option>
              </select>
            </div>
            <Filters
              type={searchType}
              state={filterState}
              onChange={handleFilterChange}
            />
            <div className="row">
              <button onClick={searchResults} className="btn modal-trigger" >Search</button>
              <button
                onClick={resetFilters}
                className="btn modal-trigger"
                style={{'marginLeft': '10px' }}
                >
                  Reset
                </button>
            </div>
            <div className="divider"></div>
          </LeftSection>
          <RightSection className="col s8 offset-s1">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>City</th>
                  <th>Price</th>
                  <th>Availibility</th>
                </tr>
              </thead>
              <tbody>
                {hotelsList.map((h, key) => ( 
                  <tr key={key}>
                    <td>{h.name}</td>
                    <td>{h.city}</td>
                    <td>{h.price}</td>
                    <td>{h.availability.map((a, index) => (<p key={index}>{a.from}:{a.to}</p>))}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </RightSection>
        </div>
      </PageSection>
    </Fragment>
  );
}
