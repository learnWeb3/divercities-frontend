import React from 'react';

const LocationIcon = ({fillColor, onClick, height, width}) => {
    return (
        <svg onClick={onClick} width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="location_on_24px">
        <path id="icon/communication/location_on_24px" fillRule="evenodd" clipRule="evenodd" d="M5 9.26501C5 5.39501 8.13 2.26501 12 2.26501C15.87 2.26501 19 5.39501 19 9.26501C19 13.435 14.58 19.185 12.77 21.375C12.37 21.855 11.64 21.855 11.24 21.375C9.42 19.185 5 13.435 5 9.26501ZM9.5 9.26501C9.5 10.645 10.62 11.765 12 11.765C13.38 11.765 14.5 10.645 14.5 9.26501C14.5 7.88501 13.38 6.76501 12 6.76501C10.62 6.76501 9.5 7.88501 9.5 9.26501Z" fill={fillColor}/>
        </g>
        </svg>
    )
}

export default LocationIcon;

