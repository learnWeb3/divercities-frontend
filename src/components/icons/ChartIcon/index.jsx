import React from 'react';

const ChartIcon = ({fillColor}) => {
    return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 4V7.03C18.39 7.52 21 10.42 21 13.95C21 14.85 20.82 15.7 20.5 16.49L23.12 18.02C23.68 16.78 24 15.4 24 13.95C24 8.77 20.05 4.5 15 4ZM14 20.95C12.1435 20.95 10.363 20.2125 9.05025 18.8997C7.7375 17.587 7 15.8065 7 13.95C7 10.42 9.61 7.52 13 7.03V4C7.94 4.5 4 8.76 4 13.95C4 16.6022 5.05357 19.1457 6.92893 21.0211C7.85752 21.9497 8.95991 22.6863 10.1732 23.1888C11.3864 23.6913 12.6868 23.95 14 23.95C17.3 23.95 20.23 22.34 22.05 19.86L19.45 18.33C18.17 19.95 16.21 20.95 14 20.95Z" fill={fillColor}/>
        </svg>
        
    )
}

export default ChartIcon;

