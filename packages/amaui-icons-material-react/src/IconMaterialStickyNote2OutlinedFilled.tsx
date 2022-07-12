import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStickyNote2OutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StickyNote2OutlinedFilled'
      short_name='StickyNote2'

      {...props}
    >
      <path d="M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V15L15 21ZM7 14H12V12H7ZM7 10H17V8H7ZM14 19 19 14H14Z"/>
    </Icon>
  )
});

export default IconMaterialStickyNote2OutlinedFilled;
