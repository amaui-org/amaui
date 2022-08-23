import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCountertopsSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CountertopsSharp'
      short_name='Countertops'

      {...props}
    >
      <path d="M4 20V12H2V10H6Q5.175 10 4.588 9.412Q4 8.825 4 8V4H10V8Q10 8.825 9.413 9.412Q8.825 10 8 10H16V7Q16 6.575 15.713 6.287Q15.425 6 15 6Q14.575 6 14.288 6.287Q14 6.575 14 7H12Q12 5.75 12.875 4.875Q13.75 4 15 4Q16.25 4 17.125 4.875Q18 5.75 18 7V10H22V12H20V20ZM6 8H8V6H6ZM6 18H11V12H6ZM13 18H18V12H13ZM6 8H8ZM12 15Z"/>
    </Icon>
  );
});

IconMaterialCountertopsSharp.displayName = 'AmauiIconMaterialCountertopsSharp';

export default IconMaterialCountertopsSharp;
