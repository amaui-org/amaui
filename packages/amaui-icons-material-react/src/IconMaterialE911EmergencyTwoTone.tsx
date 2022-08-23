import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialE911EmergencyTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='E911EmergencyTwoTone'
      short_name='E911Emergency'

      {...props}
    >
      <path d="M5 20V18H6.6L8.575 11.425Q8.775 10.775 9.312 10.387Q9.85 10 10.5 10H13.5Q14.15 10 14.688 10.387Q15.225 10.775 15.425 11.425L17.4 18H19V20ZM8.7 18H15.3L13.5 12Q13.5 12 13.5 12Q13.5 12 13.5 12H10.5Q10.5 12 10.5 12Q10.5 12 10.5 12ZM11 8V3H13V8ZM16.95 10.475 15.525 9.05 19.075 5.525 20.475 6.925ZM18 15V13H23V15ZM7.05 10.475 3.525 6.925 4.925 5.525 8.475 9.05ZM1 15V13H6V15Z"/>
    </Icon>
  );
});

IconMaterialE911EmergencyTwoTone.displayName = 'AmauiIconMaterialE911EmergencyTwoTone';

export default IconMaterialE911EmergencyTwoTone;
