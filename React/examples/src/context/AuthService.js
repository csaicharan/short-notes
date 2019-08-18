import React from 'react';

const authService = React.createContext({
    authenticated : true,
    login : () => {}
});

export default authService;