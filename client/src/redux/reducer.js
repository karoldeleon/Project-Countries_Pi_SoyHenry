import { GET_ALLCONTRIES , 
         GET_CONTRY_DETAIL, 
         GET_CONTRY_BY_NAME, 
         FILTER_BY_CONTINENTS,
         FILTER_BY_ACTIVITIES,
         GET_ALL_ACTIVITIES,
         ORDER_BY_NAME,
         ORDER_BY_POPULATION} from "./actions-types";
 
 const initialState = {
  AllCountries: [],
  AllActivities: [],
  CountryDetail: [],
  filteredCountries: null
 };

 const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALLCONTRIES:
      return {
        ...state,
        AllCountries: action.payload
      };

    case GET_ALL_ACTIVITIES:
      return {
          ...state,
          AllActivities: action.payload
        };
    
    case GET_CONTRY_DETAIL:
      return {
        ...state,
        CountryDetail: action.payload
      };
    
    case GET_CONTRY_BY_NAME:
        return {
          ...state,
          AllCountries: action.payload,
          filteredCountries : action.payload
        };
    
    case FILTER_BY_CONTINENTS:
         const allCountriesFiltered = action.payload === "All"
          ? null
          : state.AllCountries.filter(country => country.continents === action.payload);

        return {
          ...state,
          filteredCountries: allCountriesFiltered
        };
     
    case FILTER_BY_ACTIVITIES:
         const selectedActivity = action.payload;
          if (selectedActivity === 'All') {
            return {
              ...state,
              filteredCountries: null
            };
          } else {
            const allCountriesFilteredByActivity = state.AllCountries.filter(country => {
              return country.activities.some(activity => activity.name === selectedActivity);
            });
    
            return {
              ...state,
              filteredCountries: allCountriesFilteredByActivity
            };
          } 

    case ORDER_BY_NAME:
      const orderBy = action.payload;
          if (orderBy === 'All') {
            return {
              ...state,
              filteredCountries: null
            };
          } 

          if (orderBy === 'OrderAZ') {
      const countriesByNameAsc = [...state.AllCountries].sort(function(a, b){
      if(a.name.toLowerCase() < b.name.toLowerCase()) { return -1; }
      if(a.name.toLowerCase() > b.name.toLowerCase()) { return 1; }
      return 0;
        })
        return {
        ...state,
        filteredCountries: countriesByNameAsc
        };
      }

      if (orderBy === 'OrderZA'){
          const countriesByNameDes = [...state.AllCountries].sort(function(a, b) {
            if (a.name.toLowerCase() < b.name.toLowerCase()) { return 1; }
            if (a.name.toLowerCase() > b.name.toLowerCase()) { return -1; }
            return 0;
          });
          return {
            ...state,
            filteredCountries: countriesByNameDes
          };
      } 
      break;

      case ORDER_BY_POPULATION:
      const orderByN = action.payload;
          if (orderByN === 'All') {
            return {
              ...state,
              filteredCountries: null
            };
          } 

      if (orderByN === 'Minortomajor') {
       const MinorToMajor = [...state.AllCountries].sort(function(a, b){
        return a.population - b.population; })
        
        return {
        ...state,
        filteredCountries: MinorToMajor
        };
      }

      if (orderByN === 'MajortoMinor') {
        const MajorToMinor = [...state.AllCountries].sort(function(a, b){
          return b.population - a.population ; })
          
          return {
          ...state,
          filteredCountries: MajorToMinor
          };
      }
      break;

      default:
      return {
        ...state
      };
  }
};

export default reducer;