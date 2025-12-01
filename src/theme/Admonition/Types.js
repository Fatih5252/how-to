import React from 'react';
import DefaultAdmonitionTypes from '@theme-original/Admonition/Types';

function MyCustomAdmonition(props) {
  const fixedGradient = 'linear-gradient(to bottom, #155724 0%, #ffffff 100%)';

  return (
    <div
      style={{
        background: fixedGradient,
        borderLeft: '5px solid #155724',
        borderRadius: '8px',
        overflow: 'hidden',
        marginBottom: '1rem',
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
        color: 'black' 
      }}
    >
      <div style={{ padding: '15px' }}>
        <h5 style={{ 
            color: '#ffffff', 
            margin: 0, 
            fontSize: '1.2rem',
            fontWeight: 'bold' 
        }}>
          {props.title}
        </h5>
      </div>

      <div style={{ 
          padding: '0 15px 15px 15px', 
          color: '#000000',
          fontWeight: 'normal', 
          fontSize: '1rem',
          lineHeight: '1.5'
      }}>
        {props.children}
      </div>
    </div>
  );
}

const AdmonitionTypes = {
  ...DefaultAdmonitionTypes,
  'my-custom-admonition': MyCustomAdmonition,
};

export default AdmonitionTypes;