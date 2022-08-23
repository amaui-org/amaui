import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSmartDisplayRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartDisplayRounded'
      short_name='SmartDisplay'

      {...props}
    >
      <path d="M11.05 15.5 15.2 12.85Q15.675 12.575 15.675 12Q15.675 11.425 15.2 11.15L11.05 8.5Q10.55 8.175 10.025 8.45Q9.5 8.725 9.5 9.325V14.675Q9.5 15.275 10.025 15.55Q10.55 15.825 11.05 15.5ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.825 21.413 19.413Q20.825 20 20 20ZM4 18Q4 18 4 18Q4 18 4 18V6Q4 6 4 6Q4 6 4 6Q4 6 4 6Q4 6 4 6V18Q4 18 4 18Q4 18 4 18ZM4 18H20Q20 18 20 18Q20 18 20 18V6Q20 6 20 6Q20 6 20 6H4Q4 6 4 6Q4 6 4 6V18Q4 18 4 18Q4 18 4 18Z"/>
    </Icon>
  );
});

IconMaterialSmartDisplayRounded.displayName = 'AmauiIconMaterialSmartDisplayRounded';

export default IconMaterialSmartDisplayRounded;
