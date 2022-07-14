import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStopRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StopRounded'
      short_name='Stop'

      {...props}
    >
      <path d="M8 8V16ZM8 18Q7.175 18 6.588 17.413Q6 16.825 6 16V8Q6 7.175 6.588 6.588Q7.175 6 8 6H16Q16.825 6 17.413 6.588Q18 7.175 18 8V16Q18 16.825 17.413 17.413Q16.825 18 16 18ZM8 16H16V8H8Z"/>
    </Icon>
  );
});

export default IconMaterialStopRounded;
