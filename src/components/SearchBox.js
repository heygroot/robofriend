import React from 'react';

const SearchBox = ({onSearchChange}) =>{
    return (
        <div className='input-group col-12 w-25 mx-auto pb-6' style={{minWidth: '200px'}}>
            <input className='form-control'
                onChange={onSearchChange}
                type='search'
                placeholder='search robots'
            />
        </div>
    )
}

export default SearchBox;