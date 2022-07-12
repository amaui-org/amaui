import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStickyNote2Outlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StickyNote2Outlined'
      short_name='StickyNote2'

      {...props}
    >
      <path d="M5 19H14V14H19V5Q19 5 19 5Q19 5 19 5H5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V15L15 21ZM7 14V12H12V14ZM7 10V8H17V10ZM5 19V14V5Q5 5 5 5Q5 5 5 5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19Z"/>
    </Icon>
  )
});

export default IconMaterialStickyNote2Outlined;
