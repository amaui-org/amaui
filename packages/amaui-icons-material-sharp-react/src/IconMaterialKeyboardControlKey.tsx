import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardControlKey = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardControlKey'

      short_name='KeyboardControlKey'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.4 13.4 5 12l7-7 7 7-1.4 1.4L12 7.825Z"/>
    </Icon>
  );
});

IconMaterialKeyboardControlKey.displayName = 'AmauiIconMaterialKeyboardControlKey';

export default IconMaterialKeyboardControlKey;
