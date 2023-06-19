import React, { useEffect, useState, useContext } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import PaginatedItems from "../Components/PaginatedItems";
import { Store } from '../Store';
import './MovieScreen.css';

// import  FilterGenre  from '../Components/FilterGenre';
export default function MovieScreen() {
    const [details, setDetails] = useState([]);
    const [rows, setRows] = useState([]);
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { moviedetails,filterdetails } = state;
    const [run,Setrun] = useState(true);
    const [filter, Setfilter] = useState(false);
    
    const [Year, SetYear] = useState('');
    const [Director, SetDirector] = useState('');
    const [State, SetState] = useState('');
    const [Taluk, SetTaluk] = useState('');
    const [BoxOffice, SetBoxOffice] = useState('');
    const [searchtitle, Setsearchtitle] = useState([]);
    const [searchgenre, Setsearchgenre] = useState([]);
    const [total, Settotal] = useState('');
    const getProfiles = async () => {
        try {
            const { data } = await axios.get(
                'https://run.mocky.io/v3/f6799f1a-c180-44a2-87de-9b1a0319e325'
            );
            ctxDispatch({ type: 'MOVIE_DETAILS', payload: data });
            localStorage.setItem('moviedetails', JSON.stringify(data));
            console.log(data)
            setRows(data.movies);
        } catch (err) {
            console.log(err);
        }
    };
    const handleSearchId = async (id) => {
        const IdData = moviedetails.movies.filter((data) => {
             return data['id'] === Number(id)
            });
        ctxDispatch({ type: 'FILTER_DETAILS', payload: IdData });
        
        console.log(filterdetails)
    }
    const handleSearchTitle = async (Title) => {
        const IdData = moviedetails.movies.filter((data) => {
            return data['Movie Title'] === Title
           });
       ctxDispatch({ type: 'FILTER_DETAILS', payload: IdData });
    }

    const handleSearchGenre = async (Genre) => {
        const IdData = moviedetails.movies.filter((data) => {
            return data['Genre'] === Genre
           });
       ctxDispatch({ type: 'FILTER_DETAILS', payload: IdData });
    
    }
    const handleSearchYear = async (Year) => {
        const IdData = moviedetails.movies.filter((data) => {
            return data['Year'] === Year
           });
       ctxDispatch({ type: 'FILTER_DETAILS', payload: IdData });

        

    }
    const handleSearchDirector = async (Director) => {
        const IdData = moviedetails.movies.filter((data) => {
            return data['Director'] === Director
           });
       ctxDispatch({ type: 'FILTER_DETAILS', payload: IdData });
    }
    const handleSearchState = async (State) => {
        const IdData = moviedetails.movies.filter((data) => {
            return data['State'] === State
           });
       ctxDispatch({ type: 'FILTER_DETAILS', payload: IdData });
    }
    const handleSearchTaluk = async (Taluk) => {
        const IdData = moviedetails.movies.filter((data) => {
            return data['Taluk'] === Taluk
           });
       ctxDispatch({ type: 'FILTER_DETAILS', payload: IdData });
    }
    const handleSearchBoxOffice = async (BoxOffice) => {
         const IdData = moviedetails.movies.filter((data) => {
            return data['Box Office Collections (in Crores)'] === Number(BoxOffice)
           });
       ctxDispatch({ type: 'FILTER_DETAILS', payload: IdData });
        }  
    return (
        <div>
            
            <div className='Totalbox'>
                <span>Total box office collection</span>
                <div className='Totalbox-ruppe'>
                <span className="material-symbols-outlined rupee">currency_rupee</span>
                <span> {!filter ? moviedetails.movies.reduce((total,data)=>total+data['Box Office Collections (in Crores)'],0): filterdetails.reduce((total,data)=>total+data['Box Office Collections (in Crores)'],0)} Cr</span>
                </div>
            </div>
            <div className='Filters'>
                <input  list="opts" onChange={(e) => { handleSearchId(e.target.value); Setfilter(true) }} />
                <datalist id="opts">
                {moviedetails.movies && (moviedetails.movies).map((data) => {
                        return <option>{data['id']}</option> 
                    })}
                </datalist>
                <input list='one' onChange={(e) => {handleSearchTitle(e.target.value); Setfilter(true) } } ></input>
                <datalist id="one">
                    {moviedetails.movies && (moviedetails.movies).map((data) => {
                        return <option>{data['Movie Title']}</option>
                    })}
                    
                </datalist>
                <input list='two' onChange={(e) => {handleSearchGenre(e.target.value);Setfilter(true)}} ></input>
                <datalist id='two'>
                    {moviedetails.movies && (moviedetails.movies).map((data) => {

                        return <option>{data['Genre']}</option>
                    })}
                </datalist>
                <input list='three' onChange={(e) => { handleSearchDirector(e.target.value);Setfilter(true) }}></input>
                <datalist id='three'>
                    {moviedetails.movies && (moviedetails.movies).map((data) => {
                        
                        return <option>{data['Director']}</option>
                    })}
                </datalist>
                <input list='four' onChange={(e) => {handleSearchYear(e.target.value);Setfilter(true) }}></input>
                <datalist id='four'>
                    {moviedetails.movies && (moviedetails.movies).map((data) => {
                        
                        return <option>{data['Release Year']}</option>
                    })}
                </datalist>
                <input list='five' onChange={(e) => {handleSearchBoxOffice(e.target.value);Setfilter(true) }}></input>
                <datalist id='five'>
                    {moviedetails.movies && (moviedetails.movies).map((data) => {
                        
                        return <option>{data['Box Office Collections (in Crores)']}</option>
                    })}
                </datalist>
                <input list='six' onChange={(e) => {handleSearchTaluk(e.target.value);Setfilter(true) }}></input>
                <datalist id='six'>
                    {moviedetails.movies && (moviedetails.movies).map((data) => {
                        
                        return <option>{data['Taluk']}</option>
                    })}
                </datalist>
                <input list='seven' onChange={(e) => {handleSearchState(e.target.value);Setfilter(true) }}></input>
                <datalist id='seven'>
                    {moviedetails.movies && (moviedetails.movies).map((data) => {
                        
                        return <option>{data['State']}</option>
                    })}
                </datalist>
            </div>
            <button onClick={() => { Setrun(true) }}>Refresh</button>
            <table className='moviedetails'>
                    <thead>
                        <tr>
                            {moviedetails.movies && Object.entries(moviedetails.movies[0]).map(([key, value]) => {
                            return (
                                <th>{key}</th>
                            );
                        })}
                        </tr>
                    </thead>
                    <tbody>
                  {!filter ? <PaginatedItems itemsPerPage={10} items = {moviedetails.movies} /> : <PaginatedItems itemsPerPage={10} items = {filterdetails} />}
                    </tbody>
            </table>
            
        </div>

    );
}
