import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardDoubleArrowUpW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardDoubleArrowUpW100Filled'

      short_name='KeyboardDoubleArrowUp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m7.4 17.5-.5-.5 5.1-5.1 5.1 5.1-.5.5-4.6-4.6Zm0-6-.5-.5L12 5.9l5.1 5.1-.5.5L12 6.9Z"/>
    </Icon>
  );
});

IconMaterialKeyboardDoubleArrowUpW100Filled.displayName = 'AmauiIconMaterialKeyboardDoubleArrowUpW100Filled';

export default IconMaterialKeyboardDoubleArrowUpW100Filled;
