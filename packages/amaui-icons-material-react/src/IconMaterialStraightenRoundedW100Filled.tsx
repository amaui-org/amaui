import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStraightenRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StraightenRoundedW100Filled'
      short_name='Straighten'

      {...props}
    >
      <path d="M4.8 16.7Q4.15 16.7 3.725 16.275Q3.3 15.85 3.3 15.2V8.8Q3.3 8.15 3.725 7.725Q4.15 7.3 4.8 7.3H7.65V10.65Q7.65 10.8 7.75 10.9Q7.85 11 8 11Q8.15 11 8.25 10.9Q8.35 10.8 8.35 10.65V7.3H11.65V10.65Q11.65 10.8 11.75 10.9Q11.85 11 12 11Q12.15 11 12.25 10.9Q12.35 10.8 12.35 10.65V7.3H15.65V10.65Q15.65 10.8 15.75 10.9Q15.85 11 16 11Q16.15 11 16.25 10.9Q16.35 10.8 16.35 10.65V7.3H19.2Q19.85 7.3 20.275 7.725Q20.7 8.15 20.7 8.8V15.2Q20.7 15.85 20.275 16.275Q19.85 16.7 19.2 16.7Z"/>
    </Icon>
  );
});

IconMaterialStraightenRoundedW100Filled.displayName = 'AmauiIconMaterialStraightenRoundedW100Filled';

export default IconMaterialStraightenRoundedW100Filled;
