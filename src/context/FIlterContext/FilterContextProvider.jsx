import { createContext,useState,useContext , useEffect} from "react";
import filters from "../../utils/filters";

const FilterContext = createContext();

// using the filters to make the state name consistency all across the app
const filterOptions = {}
filters().map(({option})=>filterOptions[option]="")

export const useFilter = ()=>{
    return useContext(FilterContext);
}

const FilterContextProvider = ({children})=>{
    const [filter,setFilter] = useState(filterOptions)
    
    return (
        <FilterContext.Provider value={{filter,setFilter}}>
            {children}
        </FilterContext.Provider>
    )
}

export default FilterContextProvider;