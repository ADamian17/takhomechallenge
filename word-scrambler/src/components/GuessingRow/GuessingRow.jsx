import { useSelector } from 'react-redux';

import GuessingItem from "../GuessingItem/GuessingItem";

const GuessingRow = ({ row }) => {

  const rows = useSelector(({ rows }) => rows );
  
  const cols = rows[row].map( item  => 

      <GuessingItem 
        key={`${Math.floor(Math.random() * 1000000000 )}`} 
        item={item}  
        row={row} /> 
    ); 

  return (
     <div className="guessing-row">
      {
        cols
      }
    </div>
  );
};

export default GuessingRow;
