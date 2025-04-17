import React from 'react';

const Loading = () => {
    const loaderContainerStyle = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999, // Make sure it's on top of everything
    };

    const loaderStyle = {
        border: '5px solid #f3f3f3',
        borderTop: '5px solid #3498db',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        animation: 'spin 1s linear infinite',
    };

    const spinKeyframes = `
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `;

    // Inject the keyframes style dynamically
    React.useEffect(() => {
        const styleTag = document.createElement('style');
        styleTag.innerHTML = spinKeyframes;
        document.head.appendChild(styleTag);
        return () => {
            document.head.removeChild(styleTag);
        };
    }, []);

    return (
        <div style={loaderContainerStyle}>
            <div style={loaderStyle}></div>
        </div>
    );
};

export default Loading;
