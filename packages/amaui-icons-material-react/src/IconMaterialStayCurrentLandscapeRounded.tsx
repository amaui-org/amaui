import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStayCurrentLandscapeRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StayCurrentLandscapeRounded'
      short_name='StayCurrentLandscape'

      {...props}
    >
      <path d="M3 19Q2.175 19 1.588 18.413Q1 17.825 1 17V7Q1 6.175 1.588 5.588Q2.175 5 3 5H21Q21.825 5 22.413 5.588Q23 6.175 23 7V17Q23 17.825 22.413 18.413Q21.825 19 21 19ZM6 17H18V7H6ZM4 17V7H3Q3 7 3 7Q3 7 3 7V17Q3 17 3 17Q3 17 3 17ZM20 17H21Q21 17 21 17Q21 17 21 17V7Q21 7 21 7Q21 7 21 7H20ZM21 7Q21 7 21 7Q21 7 21 7H20H21Q21 7 21 7Q21 7 21 7ZM3 7Q3 7 3 7Q3 7 3 7H4H3Q3 7 3 7Q3 7 3 7Z"/>
    </Icon>
  );
});

IconMaterialStayCurrentLandscapeRounded.displayName = 'AmauiIconMaterialStayCurrentLandscapeRounded';

export default IconMaterialStayCurrentLandscapeRounded;
