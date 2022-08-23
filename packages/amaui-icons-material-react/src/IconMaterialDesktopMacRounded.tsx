import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDesktopMacRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesktopMacRounded'
      short_name='DesktopMac'

      {...props}
    >
      <path d="M9.425 22Q8.75 22 8.488 21.387Q8.225 20.775 8.7 20.3L10 19H4Q3.175 19 2.588 18.413Q2 17.825 2 17V5Q2 4.175 2.588 3.587Q3.175 3 4 3H20Q20.825 3 21.413 3.587Q22 4.175 22 5V17Q22 17.825 21.413 18.413Q20.825 19 20 19H14L15.3 20.3Q15.775 20.775 15.512 21.387Q15.25 22 14.575 22ZM4 14H20V5Q20 5 20 5Q20 5 20 5H4Q4 5 4 5Q4 5 4 5ZM4 14V5Q4 5 4 5Q4 5 4 5Q4 5 4 5Q4 5 4 5V14Z"/>
    </Icon>
  );
});

IconMaterialDesktopMacRounded.displayName = 'AmauiIconMaterialDesktopMacRounded';

export default IconMaterialDesktopMacRounded;
