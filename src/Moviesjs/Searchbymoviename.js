import React from 'react'

const Searchbymoviename = ({value = '', onChange = () => {}}) => (
    <div className="searchdiv">
        <input
           id="searchid" 
            type="text"
            value={value} 
            onChange={(event) => {
                onChange(event.target.value)
            }}
            />
        <input type="button" value="Search" />
      </div>
)

export default Searchbymoviename