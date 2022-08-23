import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHikingSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HikingSharp'
      short_name='Hiking'

      {...props}
    >
      <path d="M13.5 5.5Q12.675 5.5 12.088 4.912Q11.5 4.325 11.5 3.5Q11.5 2.675 12.088 2.087Q12.675 1.5 13.5 1.5Q14.325 1.5 14.913 2.087Q15.5 2.675 15.5 3.5Q15.5 4.325 14.913 4.912Q14.325 5.5 13.5 5.5ZM7 23 10.075 7.45Q10.225 6.725 10.75 6.362Q11.275 6 11.85 6Q12.425 6 12.913 6.25Q13.4 6.5 13.7 7L14.7 8.6Q15.15 9.325 15.863 9.912Q16.575 10.5 17.5 10.775V9H19V23H17.5V12.85Q16.3 12.575 15.275 11.975Q14.25 11.375 13.5 10.5L12.9 13.5L15 15.5V23H13V17L10.9 15L9.1 23ZM7.425 13.125 8.775 6.275 5.65 5.675 4.325 12.55Z"/>
    </Icon>
  );
});

IconMaterialHikingSharp.displayName = 'AmauiIconMaterialHikingSharp';

export default IconMaterialHikingSharp;
