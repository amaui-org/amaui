import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardW100Filled'

      short_name='Keyboard'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 17.7V6.3h17.4v11.4Zm8-8h1.4V8.3h-1.4Zm0 3h1.4v-1.4h-1.4Zm-3-3h1.4V8.3H8.3Zm0 3h1.4v-1.4H8.3Zm-3 0h1.4v-1.4H5.3Zm0-3h1.4V8.3H5.3Zm3 6h7.4v-1.4H8.3Zm6-3h1.4v-1.4h-1.4Zm0-3h1.4V8.3h-1.4Zm3 3h1.4v-1.4h-1.4Zm0-3h1.4V8.3h-1.4Z"/>
    </Icon>
  );
});

IconMaterialKeyboardW100Filled.displayName = 'AmauiIconMaterialKeyboardW100Filled';

export default IconMaterialKeyboardW100Filled;
