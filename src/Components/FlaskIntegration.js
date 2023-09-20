import React from 'react';

const FlaskIntegration = () => {
  return (
    <div>
      <iframe
        title="Flask App Integration"
        src="http://localhost:5000/gradio"
        width="100%"
        height="600px"
        frameBorder="0"
        scrolling="no"
      ></iframe>
    </div>
  );
};

export default FlaskIntegration;
