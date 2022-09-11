import {useContext} from 'react';

import {ContextType, ThemeContext} from '../contexts/theme-context';

const useStyles = () => {
  const {theme, setTheme} = useContext<ContextType>(ThemeContext);
  return {theme, setTheme};
};

export default useStyles;
