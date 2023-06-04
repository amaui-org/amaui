import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardAltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardAltW100Filled'

      short_name='KeyboardAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.3 19.7V5.3h19.4v14.4Zm7-10h1.4V8.3H9.3Zm-4 0h1.4V8.3H5.3Zm2.85 7.15h7.7v-.7h-7.7ZM13.3 9.7h1.4V8.3h-1.4Zm-4 4h1.4v-1.4H9.3Zm-4 0h1.4v-1.4H5.3Zm8 0h1.4v-1.4h-1.4Zm4-4h1.4V8.3h-1.4Zm0 4h1.4v-1.4h-1.4Z"/>
    </Icon>
  );
});

IconMaterialKeyboardAltW100Filled.displayName = 'AmauiIconMaterialKeyboardAltW100Filled';

export default IconMaterialKeyboardAltW100Filled;
