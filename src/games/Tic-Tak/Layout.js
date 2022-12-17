import React from 'react';
import Box from './Box'

function Layout({boxes, onClick }) {
    return (
      <div>
        {boxes.map((box, i) => (
          <Box key={i} value={box} onClick={() => onClick(i)} />
      ))}
      </div>
    );
}
export default Layout;