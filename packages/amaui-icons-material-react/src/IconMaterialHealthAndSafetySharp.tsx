import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHealthAndSafetySharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HealthAndSafetySharp'
      short_name='HealthAndSafety'

      {...props}
    >
      <path d="M10.5 15.5H13.5V13H16V10H13.5V7.5H10.5V10H8V13H10.5ZM12 22Q8.525 21.125 6.263 18.012Q4 14.9 4 11.1V5L12 2L20 5V11.1Q20 14.9 17.738 18.012Q15.475 21.125 12 22ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12ZM12 19.9Q14.6 19.075 16.3 16.6Q18 14.125 18 11.1V6.375L12 4.125L6 6.375V11.1Q6 14.125 7.7 16.6Q9.4 19.075 12 19.9Z"/>
    </Icon>
  );
});

IconMaterialHealthAndSafetySharp.displayName = 'AmauiIconMaterialHealthAndSafetySharp';

export default IconMaterialHealthAndSafetySharp;
