import React from 'react';

const divStyle = {
  color: '#282c34',
};

class About extends React.Component {

  render() {
    return (
      <div style={divStyle}>
        <h2>About Page</h2>
        <main>
          <p>This section contains information about...</p>
        </main>
      </div>
    )
  }
}

export default About;
