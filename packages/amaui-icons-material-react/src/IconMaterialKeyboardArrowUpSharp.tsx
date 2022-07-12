import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKeyboardArrowUpSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardArrowUpSharp'
      short_name='KeyboardArrowUp'

      {...props}
    >
      <path d="M7.4 15.4 6 14 12 8 18 14 16.6 15.4 12 10.8Z"/>
    </Icon>
  )
});

export default IconMaterialKeyboardArrowUpSharp;
