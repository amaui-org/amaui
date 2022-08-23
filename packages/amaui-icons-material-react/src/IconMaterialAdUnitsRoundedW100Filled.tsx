import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAdUnitsRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdUnitsRoundedW100Filled'
      short_name='AdUnits'

      {...props}
    >
      <path d="M9 7.7Q8.85 7.7 8.75 7.6Q8.65 7.5 8.65 7.35Q8.65 7.2 8.75 7.1Q8.85 7 9 7H15Q15.15 7 15.25 7.1Q15.35 7.2 15.35 7.35Q15.35 7.5 15.25 7.6Q15.15 7.7 15 7.7ZM7.8 21.7Q7.175 21.7 6.738 21.262Q6.3 20.825 6.3 20.2V3.8Q6.3 3.175 6.738 2.737Q7.175 2.3 7.8 2.3H16.2Q16.825 2.3 17.262 2.737Q17.7 3.175 17.7 3.8V20.2Q17.7 20.825 17.262 21.262Q16.825 21.7 16.2 21.7ZM7 18.65H17V5.35H7Z"/>
    </Icon>
  );
});

IconMaterialAdUnitsRoundedW100Filled.displayName = 'AmauiIconMaterialAdUnitsRoundedW100Filled';

export default IconMaterialAdUnitsRoundedW100Filled;
