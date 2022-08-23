import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWashSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WashSharp'
      short_name='Wash'

      {...props}
    >
      <path d="M18.5 8Q17.45 8 16.725 7.275Q16 6.55 16 5.5Q16 4.875 16.388 4.1Q16.775 3.325 17.25 2.625Q17.8 1.825 18.5 1Q19.2 1.825 19.75 2.625Q20.225 3.325 20.613 4.1Q21 4.875 21 5.5Q21 6.55 20.275 7.275Q19.55 8 18.5 8ZM13.5 9Q12.875 9 12.438 8.562Q12 8.125 12 7.5Q12 7.175 12.238 6.75Q12.475 6.325 12.75 5.925Q13.075 5.475 13.5 5Q13.925 5.475 14.25 5.925Q14.525 6.325 14.762 6.75Q15 7.175 15 7.5Q15 8.125 14.562 8.562Q14.125 9 13.5 9ZM1 23V12.7L9.125 5L10.75 6.7L8.875 10H20V12.5H12V13.5H22V16H12V17H21V19.5H12V20.5H19V23ZM3 21H10V12H7V9.775L3 13.525ZM6.5 15.375Z"/>
    </Icon>
  );
});

IconMaterialWashSharp.displayName = 'AmauiIconMaterialWashSharp';

export default IconMaterialWashSharp;
