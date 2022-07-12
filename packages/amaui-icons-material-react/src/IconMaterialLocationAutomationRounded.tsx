import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocationAutomationRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationAutomationRounded'
      short_name='LocationAutomation'

      {...props}
    >
      <path d="M4 19V7L12 1L20 7V11H18V8L12 3.5L6 8V17H12V19ZM18.5 22 17.1 18.9 14 17.5 17.1 16.1 18.5 13 19.9 16.1 23 17.5 19.9 18.9Z"/>
    </Icon>
  )
});

export default IconMaterialLocationAutomationRounded;
