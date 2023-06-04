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
      <g><rect fill="none" height="24" width="24"/></g><g><g><polygon points="18,6.41 16.59,5 12,9.58 7.41,5 6,6.41 12,12.41"/><polygon points="18,13 16.59,11.59 12,16.17 7.41,11.59 6,13 12,19"/></g></g>
    </Icon>
  );
});

IconMaterialKeyboardDoubleArrowDown.displayName = 'AmauiIconMaterialKeyboardDoubleArrowDown';

export default IconMaterialKeyboardDoubleArrowDown;
