import React, { useState, useEffect } from 'react';
import './Portfolio.css';
import { Search } from 'lucide-react';
import axios from 'axios';
import { Filter } from 'lucide-react';

const Portfolio = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 960);
    const [portfolioData, setPortfolioData] = useState([]);
    const [searchQuery, setSearchQuery] = useState(''); 
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 960);
      };

      fetchData();

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    const fetchData = async () => {
        const response = await axios.get('http://localhost:3000/data');
        if (!response.data.success) {
            return;
        }
        setPortfolioData(response.data.data);
    };

    const handleSearch = (event) => {
        setSearchQuery(event.target.value); 
    };

    
    const filteredData = portfolioData.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.address.toLowerCase().includes(searchQuery.toLowerCase()) 
    );

    return (
        <div className='portfolio'>
            <p style={{ fontSize: '25px', fontWeight: '600' }}>Portfolio</p>
            <div className='portfolio-cont'>
                <div className='portfolio-items'>
                    <div className='portfolio-left'>
                        <span style={{ borderBottom: "2px solid #DF5532", color: "#DF5532" }}>Project</span>
                        <span>Saved</span>
                        <span>Shared</span>
                        <span>Achievement</span>
                    </div>
                    <div className='portfolio-right'>
                        <div className='filter'>
                            <Filter/>
                            <span>Filter</span>
                        </div>
                        <div className='search-cont'>
                            <input
                                type="text"
                                placeholder='Search a project'
                                value={searchQuery} 
                                onChange={handleSearch} 
                            />
                            <span className='search'><Search /></span>
                        </div>
                    </div>
                </div>
                <div className='items-cont'>
                    {filteredData.length > 0 ? filteredData.map((item, index) => (
                        <div className='item' key={index}>
                            <img src={item.image} alt="" />
                            <div className='about-item'>
                                <div className='item-top'>
                                    <p style={{ fontWeight: '600', fontSize: '18px' }}>{item.title}</p>
                                    <p style={{ color: 'gray', fontSize: '14px' }}>{item.description}</p>
                                </div>
                                <div className='item-bottom'>
                                    <div>
                                        <p>{item.name}</p>
                                        <p style={{ color: 'gray', fontSize: '14px' }}>{item.address}</p>
                                    </div>
                                    <div>
                                        <button>{isMobile ? 'A' : 'Add to Cart'}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )) : 
                    <p>No results found</p> // Display message if no matches are found
                    }
                </div>
            </div>
        </div>
    )
}

export default Portfolio;
