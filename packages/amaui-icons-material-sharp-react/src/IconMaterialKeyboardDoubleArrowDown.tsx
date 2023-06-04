import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardDoubleArrowDown = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardDoubleArrowDown'

      short_name='KeyboardDoubleArrowDown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 19-6-6 1.4-1.4 4.6 4.575 4.6-4.575L18 13Zm0-6L6 7l1.4-1.4 4.6 4.575L16.6 5.6 18 7Z"/>
    </Icon>
  );
});

IconMaterialKeyboardDoubleArrowDown.displayName = 'AmauiIconMaterialKeyboardDoubleArrowDown';

export default IconMaterialKeyboardDoubleArrowDown;
