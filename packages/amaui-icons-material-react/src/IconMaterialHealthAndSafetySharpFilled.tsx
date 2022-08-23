import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHealthAndSafetySharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HealthAndSafetySharpFilled'
      short_name='HealthAndSafety'

      {...props}
    >
      <path d="M10.5 15.5H13.5V13H16V10H13.5V7.5H10.5V10H8V13H10.5ZM12 22Q8.525 21.125 6.263 18.012Q4 14.9 4 11.1V5L12 2L20 5V11.1Q20 14.9 17.738 18.012Q15.475 21.125 12 22Z"/>
    </Icon>
  );
});

IconMaterialHealthAndSafetySharpFilled.displayName = 'AmauiIconMaterialHealthAndSafetySharpFilled';

export default IconMaterialHealthAndSafetySharpFilled;
