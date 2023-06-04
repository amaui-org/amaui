import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardControlKeyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardControlKeyW100Filled'

      short_name='KeyboardControlKey'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.4 12.475 5.925 12 12 5.925 18.075 12l-.475.475L12 6.9Z"/>
    </Icon>
  );
});

IconMaterialKeyboardControlKeyW100Filled.displayName = 'AmauiIconMaterialKeyboardControlKeyW100Filled';

export default IconMaterialKeyboardControlKeyW100Filled;
