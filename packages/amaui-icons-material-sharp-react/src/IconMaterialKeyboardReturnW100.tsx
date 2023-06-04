import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardReturnW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardReturnW100'

      short_name='KeyboardReturn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m8.875 17.1-5.1-5.1 5.1-5.1.5.5-4.25 4.25h14.4v-4h.7v4.7h-15.1l4.25 4.25Z"/>
    </Icon>
  );
});

IconMaterialKeyboardReturnW100.displayName = 'AmauiIconMaterialKeyboardReturnW100';

export default IconMaterialKeyboardReturnW100;
