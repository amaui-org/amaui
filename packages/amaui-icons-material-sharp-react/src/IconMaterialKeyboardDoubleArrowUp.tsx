import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardDoubleArrowUp = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardDoubleArrowUp'

      short_name='KeyboardDoubleArrowUp'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.4 18.4 6 17l6-6 6 6-1.4 1.4-4.6-4.575Zm0-6L6 11l6-6 6 6-1.4 1.4L12 7.825Z"/>
    </Icon>
  );
});

IconMaterialKeyboardDoubleArrowUp.displayName = 'AmauiIconMaterialKeyboardDoubleArrowUp';

export default IconMaterialKeyboardDoubleArrowUp;
