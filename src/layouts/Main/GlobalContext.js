import React from 'react';

export default React.createContext(null);

// const ctx = React.createContext(null);

// export const { Provider, Consumer } = ctx;

// export const withGlobalContext = Component => props =>
//   <Consumer>
//     {
//       value =>
//         <Component
//           {...props}
//           {...value}
//         />
//     }
//   </Consumer>
