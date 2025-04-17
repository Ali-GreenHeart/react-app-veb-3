import React from 'react';

const ErrorComponent = ({ error }) => {
    const errorContainerStyle = {
        padding: '20px',
        margin: '20px 0',
        backgroundColor: '#f8d7da', // Light red background
        color: '#721c24',           // Dark red text
        border: '1px solid #f5c6cb',
        borderRadius: '5px',
        fontSize: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column'
    };

    const errorTextStyle = {
        marginRight: '10px',
    };
    const imgStyle = {
        borderRadius: '50%',
        width: 300,
        height: 300,
        objectFit: 'cover'
    }
    const closeButtonStyle = {
        backgroundColor: 'transparent',
        border: 'none',
        color: '#721c24',
        fontSize: '20px',
        cursor: 'pointer',
    };

    return (
        <div style={errorContainerStyle}>
            <img
                src={`https://http.cat/${error.status}.jpg`}
                style={imgStyle}
            />
            <div style={errorTextStyle}>{error.message}</div>
            <button style={closeButtonStyle} onClick={() => alert('Error closed!')}>
                &times; {/* Close icon */}
            </button>
        </div>
    );
};

export default ErrorComponent;
