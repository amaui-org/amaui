import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardDoubleArrowLeft = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardDoubleArrowLeft'

      short_name='KeyboardDoubleArrowLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m11 18-6-6 6-6 1.4 1.4L7.825 12l4.575 4.6Zm6.6 0-6-6 6-6L19 7.4 14.425 12 19 16.6Z"/>
    </Icon>
  );
});

IconMaterialKeyboardDoubleArrowLeft.displayName = 'AmauiIconMaterialKeyboardDoubleArrowLeft';

export default IconMaterialKeyboardDoubleArrowLeft;
