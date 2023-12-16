import React from 'react';

const PercentageContainer = ({ number }) => {
  return (
    <div className='px-2 py-1 bg-gray-200 rounded-full w-auto inline-block'>
        <p className={`${number > 0 ? "text-green-500" : "text-red-500"} text-sm leading-loose font-semibold w-auto inline-block`}>
            {`${number > 0 ? "+" : ""}${number}%`}
        </p>
    </div>
  )
}

export default PercentageContainer;
