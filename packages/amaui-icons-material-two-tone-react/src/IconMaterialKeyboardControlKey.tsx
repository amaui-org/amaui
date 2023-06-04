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
      <g><rect fill="none" height="24" width="24"/></g><g><polygon points="5,12 6.41,13.41 12,7.83 17.59,13.41 19,12 12,5"/></g>
    </Icon>
  );
});

IconMaterialKeyboardControlKey.displayName = 'AmauiIconMaterialKeyboardControlKey';

export default IconMaterialKeyboardControlKey;
