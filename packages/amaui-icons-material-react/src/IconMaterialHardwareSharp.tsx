import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHardwareSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HardwareSharp'
      short_name='Hardware'

      {...props}
    >
      <path d="M9 21V8H4Q4 5.925 5.463 4.463Q6.925 3 9 3H15V6L18 3H20V11H18L15 8V21ZM13 12ZM11 19H13V13H11ZM11 11H13V5H9Q8.35 5 7.775 5.262Q7.2 5.525 6.775 6H11ZM13 11V6Q13 5.525 13 5.262Q13 5 13 5V11ZM13 19V13V19Z"/>
    </Icon>
  );
});

IconMaterialHardwareSharp.displayName = 'AmauiIconMaterialHardwareSharp';

export default IconMaterialHardwareSharp;
