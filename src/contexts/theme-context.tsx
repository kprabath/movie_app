import React, {createContext, ReactElement, useState} from 'react';

import {ThemeObject} from '../library/types';
import {ThemeA} from '../theme/themes';

export type ContextType = {
  theme: ThemeObject;
  setTheme: (theme: ThemeObject) => void;
};
export const ThemeContext = createContext<ContextType | {}>({});

const ThemeProvider = ({
  children,
}: {
  children: ReactElement | ReactElement[];
}) => {
  const [theme, setTheme] = useState(ThemeA);

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
