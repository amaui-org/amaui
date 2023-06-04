import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardHideW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardHideW100Filled'

      short_name='KeyboardHide'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 15.7V4.3h17.4v11.4Zm8-8h1.4V6.3h-1.4Zm0 3h1.4V9.3h-1.4Zm-3-3h1.4V6.3H8.3Zm0 3h1.4V9.3H8.3Zm-3 0h1.4V9.3H5.3Zm0-3h1.4V6.3H5.3Zm3 6h7.4v-1.4H8.3Zm6-3h1.4V9.3h-1.4Zm0-3h1.4V6.3h-1.4Zm3 3h1.4V9.3h-1.4Zm0-3h1.4V6.3h-1.4ZM12 21.5l-2.8-2.8h5.6Z"/>
    </Icon>
  );
});

IconMaterialKeyboardHideW100Filled.displayName = 'AmauiIconMaterialKeyboardHideW100Filled';

export default IconMaterialKeyboardHideW100Filled;
