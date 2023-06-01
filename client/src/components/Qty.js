import React from 'react'
// context

const Qty = ({ item }) => {
  return (
    <div>
      {item.amount > 10 ? (
        <select value={item.amount} className='p-2 rounded-lg w-[100px] h-12 outline-none text-primary'>select</select>
      ) : (
        <input
         className='text-primary placeholder:text-primary h-12 rounded-md p-4 w-[120px] outline-accent'
         type='text'
         placeholder={`${item.amount}`}/>
      )}
    </div>
  )
};

export default Qty;
