import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardReturn = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardReturn'

      short_name='KeyboardReturn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7h-2z"/>
    </Icon>
  );
});

IconMaterialKeyboardReturn.displayName = 'AmauiIconMaterialKeyboardReturn';

export default IconMaterialKeyboardReturn;
