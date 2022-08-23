import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHardwareRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HardwareRounded'
      short_name='Hardware'

      {...props}
    >
      <path d="M10 21Q9.575 21 9.288 20.712Q9 20.425 9 20V8H4Q4 5.925 5.463 4.463Q6.925 3 9 3H13Q13.825 3 14.413 3.587Q15 4.175 15 5V6L17.575 3.425Q17.75 3.25 18.05 3.125Q18.35 3 18.625 3Q19.2 3 19.6 3.4Q20 3.8 20 4.375V9.625Q20 10.2 19.587 10.6Q19.175 11 18.6 11Q18.35 11 18.05 10.875Q17.75 10.75 17.575 10.575L15 8V20Q15 20.425 14.713 20.712Q14.425 21 14 21ZM13 12ZM11 19H13V13H11ZM11 11H13V5Q13 5 13 5Q13 5 13 5H9Q8.35 5 7.775 5.262Q7.2 5.525 6.775 6H11ZM13 11V6Q13 5.525 13 5.262Q13 5 13 5Q13 5 13 5Q13 5 13 5V11ZM13 19V13V19Z"/>
    </Icon>
  );
});

IconMaterialHardwareRounded.displayName = 'AmauiIconMaterialHardwareRounded';

export default IconMaterialHardwareRounded;
