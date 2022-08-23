import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStayCurrentLandscapeRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StayCurrentLandscapeRoundedFilled'
      short_name='StayCurrentLandscape'

      {...props}
    >
      <path d="M3 19Q2.175 19 1.588 18.413Q1 17.825 1 17V7Q1 6.175 1.588 5.588Q2.175 5 3 5H21Q21.825 5 22.413 5.588Q23 6.175 23 7V17Q23 17.825 22.413 18.413Q21.825 19 21 19ZM6 17H18V7H6Z"/>
    </Icon>
  );
});

IconMaterialStayCurrentLandscapeRoundedFilled.displayName = 'AmauiIconMaterialStayCurrentLandscapeRoundedFilled';

export default IconMaterialStayCurrentLandscapeRoundedFilled;
