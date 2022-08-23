import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialKeyboardArrowUpSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardArrowUpSharpW100Filled'
      short_name='KeyboardArrowUp'

      {...props}
    >
      <path d="M7.4 14.5 6.9 14 12 8.9 17.1 14 16.6 14.5 12 9.9Z"/>
    </Icon>
  );
});

IconMaterialKeyboardArrowUpSharpW100Filled.displayName = 'AmauiIconMaterialKeyboardArrowUpSharpW100Filled';

export default IconMaterialKeyboardArrowUpSharpW100Filled;
