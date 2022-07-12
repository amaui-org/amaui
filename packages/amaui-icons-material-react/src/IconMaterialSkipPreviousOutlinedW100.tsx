import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSkipPreviousOutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SkipPreviousOutlinedW100'
      short_name='SkipPrevious'

      {...props}
    >
      <path d="M7.1 16.2V7.8H7.8V16.2ZM16.9 16.2 10.6 12 16.9 7.8ZM16.2 12ZM16.2 14.9V9.1L11.85 12Z"/>
    </Icon>
  )
});

export default IconMaterialSkipPreviousOutlinedW100;
