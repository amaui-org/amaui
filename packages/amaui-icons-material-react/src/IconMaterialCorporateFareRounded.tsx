import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCorporateFareRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CorporateFareRounded'
      short_name='CorporateFare'

      {...props}
    >
      <path d="M4 21Q3.175 21 2.588 20.413Q2 19.825 2 19V5Q2 4.175 2.588 3.587Q3.175 3 4 3H10Q10.825 3 11.413 3.587Q12 4.175 12 5V7H20Q20.825 7 21.413 7.587Q22 8.175 22 9V19Q22 19.825 21.413 20.413Q20.825 21 20 21ZM4 19H10V17H4ZM4 15H10V13H4ZM4 11H10V9H4ZM4 7H10V5H4ZM12 19H20V9H12ZM14 13V11H18V13ZM14 17V15H18V17Z"/>
    </Icon>
  );
});

IconMaterialCorporateFareRounded.displayName = 'AmauiIconMaterialCorporateFareRounded';

export default IconMaterialCorporateFareRounded;
