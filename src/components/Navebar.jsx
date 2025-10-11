// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import { Link } from 'react-router-dom';

// const Navebar = () => {
//     return (
//         <Box sx={{ flexGrow: 1 }}>
//             <AppBar position="static">
//                 <Toolbar>

//                     <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//                         Assesments
//                     </Typography>
//                     <Link to={'/'} >Single video</Link>
//                     <Link to={'/multiple-target-home'} >Multiple Video</Link>
//                     <Button color="inherit">Login</Button>
//                 </Toolbar>
//             </AppBar>
//         </Box>
//     )
// }

// export default Navebar

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
        <Toolbar>
        

          <Box sx={{ display: 'flex', gap: 2 }}>
            <Link
              to="/"
              style={{
                color: 'white',
                textDecoration: 'none',
                fontWeight: 500,
                fontSize: '16px',
              }}
            >
              Single Video
            </Link>

            <Link
              to="/multiple-target-home"
              style={{
                color: 'white',
                textDecoration: 'none',
                fontWeight: 500,
                fontSize: '16px',
              }}
            >
              Multiple Video
            </Link>

          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
