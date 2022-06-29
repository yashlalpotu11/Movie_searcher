import React, {useState, useContext, useEffect} from 'react';

const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const AppContext = React.createContext();

const AppProvider =({children})=>{
    const[loading, setLoading] = useState(true);
    const[movies, setMovies] = useState([]);
    const[query, setQuery] = useState('avengers');
    const[error, setError] = useState({show: false, msg: ''});

    const fetchMovies = async () => {
        setLoading(true);
        const response = await fetch(`${API_ENDPOINT}&s=${query}`);
        const data = await response.json();

        if(data.Response === "True"){
            setLoading(false);
            setMovies(data.Search);
            setError({show: false, msg: ''});
        }
        else{
            setLoading(false);
            // setMovies([]);
            setError({show: true, msg: data.Error});
        }
    };

    console.log(process.env.REACT_APP_API_KEY);

    useEffect(()=>{
        fetchMovies();
    }, [query]);

    return(
        <AppContext.Provider value={{loading, movies, query, setQuery, error}}>
            {children}
        </AppContext.Provider>
    );
};
const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppProvider, useGlobalContext, API_ENDPOINT};