import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardReturnW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardReturnW100Filled'

      short_name='KeyboardReturn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m8.875 17.1-5.1-5.1 5.1-5.1.5.5-4.25 4.25h14.4v-4h.7v4.7h-15.1l4.25 4.25Z"/>
    </Icon>
  );
});

IconMaterialKeyboardReturnW100Filled.displayName = 'AmauiIconMaterialKeyboardReturnW100Filled';

export default IconMaterialKeyboardReturnW100Filled;
