import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBattery80RoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery80RoundedW100Filled'
      short_name='Battery80'

      {...props}
    >
      <path d="M8.35 21.35Q8.05 21.35 7.85 21.15Q7.65 20.95 7.65 20.65V5.35Q7.65 5.05 7.85 4.85Q8.05 4.65 8.35 4.65H10.4V3.9Q10.4 3.575 10.613 3.362Q10.825 3.15 11.15 3.15H12.85Q13.175 3.15 13.388 3.362Q13.6 3.575 13.6 3.9V4.65H15.65Q15.95 4.65 16.15 4.85Q16.35 5.05 16.35 5.35V20.65Q16.35 20.95 16.15 21.15Q15.95 21.35 15.65 21.35Z"/>
    </Icon>
  );
});

IconMaterialBattery80RoundedW100Filled.displayName = 'AmauiIconMaterialBattery80RoundedW100Filled';

export default IconMaterialBattery80RoundedW100Filled;
