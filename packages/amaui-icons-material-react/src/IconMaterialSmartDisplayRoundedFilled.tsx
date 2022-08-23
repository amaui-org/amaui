import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSmartDisplayRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartDisplayRoundedFilled'
      short_name='SmartDisplay'

      {...props}
    >
      <path d="M11.05 15.5 15.2 12.85Q15.675 12.55 15.675 12Q15.675 11.45 15.2 11.15L11.05 8.5Q10.55 8.15 10.025 8.45Q9.5 8.75 9.5 9.325V14.675Q9.5 15.25 10.025 15.55Q10.55 15.85 11.05 15.5ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.825 21.413 19.413Q20.825 20 20 20Z"/>
    </Icon>
  );
});

IconMaterialSmartDisplayRoundedFilled.displayName = 'AmauiIconMaterialSmartDisplayRoundedFilled';

export default IconMaterialSmartDisplayRoundedFilled;
