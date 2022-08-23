import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFindReplaceSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FindReplaceSharpW100'
      short_name='FindReplace'

      {...props}
    >
      <path d="M5.4 10Q5.7 7.975 7.338 6.637Q8.975 5.3 11 5.3Q13.225 5.3 14.388 6.375Q15.55 7.45 16 8.25V5.3H16.7V10H12V9.3H15.7Q15.275 8.175 14.113 7.087Q12.95 6 11 6Q9.2 6 7.825 7.137Q6.45 8.275 6.1 10ZM19.6 20.15 14.75 15.3Q13.925 16.025 12.988 16.362Q12.05 16.7 11 16.7Q9.525 16.7 8.125 15.925Q6.725 15.15 6 13.75V16.7H5.3V12H10V12.7H6.3Q6.8 14.125 8.088 15.062Q9.375 16 11 16Q12.8 16 14.175 14.863Q15.55 13.725 15.9 12H16.6Q16.475 12.9 16.15 13.512Q15.825 14.125 15.25 14.8L20.1 19.65Z"/>
    </Icon>
  );
});

IconMaterialFindReplaceSharpW100.displayName = 'AmauiIconMaterialFindReplaceSharpW100';

export default IconMaterialFindReplaceSharpW100;
