import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLowPrioritySharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LowPrioritySharp'
      short_name='LowPriority'

      {...props}
    >
      <path d="M22 5V7H14V5ZM22 10.5V12.5H14V10.5ZM22 16V18H14V16ZM12 5V7H8.5Q6.625 7 5.312 8.3Q4 9.6 4 11.475Q4 13.25 5.188 14.525Q6.375 15.8 8.15 15.95L6.9 14.7L8.3 13.3L12 17L8.3 20.7L6.9 19.3L8.2 18Q5.575 17.85 3.788 15.975Q2 14.1 2 11.5Q2 8.775 3.888 6.887Q5.775 5 8.5 5Z"/>
    </Icon>
  );
});

IconMaterialLowPrioritySharp.displayName = 'AmauiIconMaterialLowPrioritySharp';

export default IconMaterialLowPrioritySharp;
