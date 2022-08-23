import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTourRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TourRounded'
      short_name='Tour'

      {...props}
    >
      <path d="M5 22V2.975Q5 2.55 5.287 2.275Q5.575 2 6 2Q6.425 2 6.713 2.287Q7 2.575 7 3V4H19.525Q20.05 4 20.35 4.438Q20.65 4.875 20.45 5.375L19 9L20.45 12.625Q20.65 13.125 20.35 13.562Q20.05 14 19.525 14H7V22ZM7 6V9V12ZM12.5 11Q13.325 11 13.913 10.412Q14.5 9.825 14.5 9Q14.5 8.175 13.913 7.587Q13.325 7 12.5 7Q11.675 7 11.088 7.587Q10.5 8.175 10.5 9Q10.5 9.825 11.088 10.412Q11.675 11 12.5 11ZM7 12H18.05L16.85 9L18.05 6H7Z"/>
    </Icon>
  );
});

IconMaterialTourRounded.displayName = 'AmauiIconMaterialTourRounded';

export default IconMaterialTourRounded;
