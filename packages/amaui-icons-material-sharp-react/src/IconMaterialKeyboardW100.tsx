import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardW100'

      short_name='Keyboard'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 17h16V7H4Zm-.7.7V6.3h17.4v11.4Zm8-8h1.4V8.3h-1.4Zm0 3h1.4v-1.4h-1.4Zm-3-3h1.4V8.3H8.3Zm0 3h1.4v-1.4H8.3Zm-3 0h1.4v-1.4H5.3Zm0-3h1.4V8.3H5.3Zm3 6h7.4v-1.4H8.3Zm6-3h1.4v-1.4h-1.4Zm0-3h1.4V8.3h-1.4Zm3 3h1.4v-1.4h-1.4Zm0-3h1.4V8.3h-1.4ZM4 17V7v10Z"/>
    </Icon>
  );
});

IconMaterialKeyboardW100.displayName = 'AmauiIconMaterialKeyboardW100';

export default IconMaterialKeyboardW100;
