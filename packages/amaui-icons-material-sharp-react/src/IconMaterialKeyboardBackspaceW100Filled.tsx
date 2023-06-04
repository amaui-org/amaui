import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardBackspaceW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardBackspaceW100Filled'

      short_name='KeyboardBackspace'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m8.875 17.1-5.1-5.1 5.1-5.1.5.5-4.25 4.25h15.1v.7h-15.1l4.25 4.25Z"/>
    </Icon>
  );
});

IconMaterialKeyboardBackspaceW100Filled.displayName = 'AmauiIconMaterialKeyboardBackspaceW100Filled';

export default IconMaterialKeyboardBackspaceW100Filled;
