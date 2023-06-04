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
      <g><rect fill="none" height="24" width="24"/></g><g><g><polygon points="17.59,18 19,16.59 14.42,12 19,7.41 17.59,6 11.59,12"/><polygon points="11,18 12.41,16.59 7.83,12 12.41,7.41 11,6 5,12"/></g></g>
    </Icon>
  );
});

IconMaterialKeyboardDoubleArrowLeft.displayName = 'AmauiIconMaterialKeyboardDoubleArrowLeft';

export default IconMaterialKeyboardDoubleArrowLeft;
