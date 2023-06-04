import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardArrowUpW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardArrowUpW100Filled'

      short_name='KeyboardArrowUp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m7.4 14.5-.5-.5L12 8.9l5.1 5.1-.5.5L12 9.9Z"/>
    </Icon>
  );
});

IconMaterialKeyboardArrowUpW100Filled.displayName = 'AmauiIconMaterialKeyboardArrowUpW100Filled';

export default IconMaterialKeyboardArrowUpW100Filled;
