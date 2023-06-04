import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardDoubleArrowUpW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardDoubleArrowUpW100'

      short_name='KeyboardDoubleArrowUp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m7.4 17.5-.5-.5 5.1-5.1 5.1 5.1-.5.5-4.6-4.6Zm0-6-.5-.5L12 5.9l5.1 5.1-.5.5L12 6.9Z"/>
    </Icon>
  );
});

IconMaterialKeyboardDoubleArrowUpW100.displayName = 'AmauiIconMaterialKeyboardDoubleArrowUpW100';

export default IconMaterialKeyboardDoubleArrowUpW100;
